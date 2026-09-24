import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';
const isWeb = Platform.OS === 'web';

const STORAGE_KEY = '@tarefas:usuarios';

const readUsers = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

const writeUsers = users => localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
let db = null;

if (!isWeb) {
  try {
    db = SQLite.openDatabase('tarefas.db');
  } catch (e) {
    console.warn('expo-sqlite unavailable:', e && e.message);
    db = null;
  }
}

const execSql = (sql, params = []) =>
  new Promise((resolve, reject) => {
    if (!db) return reject(new Error('Database not available'));
    db.transaction(
      tx => {
        tx.executeSql(
          sql,
          params,
          (_, result) => resolve(result),
          (_, error) => {
            reject(error);
            return false;
          }
        );
      },
      txError => reject(txError)
    );
  });

async function criarTabela() {
  if (isWeb) return;
  await execSql(`CREATE TABLE IF NOT EXISTS usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
  );`);
}

async function criarUsuario(user, senha) {
  if (isWeb) {
    const users = readUsers();
    if (users.find(u => u.user === user)) {
      const err = new Error('Usuário já existe');
      err.code = 'USER_EXISTS';
      throw err;
    }
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    users.push({ id, user, senha });
    writeUsers(users);
    return { insertId: id };
  }

  
  await criarTabela();
  try {
    const res = await execSql('INSERT INTO usuario (user, senha) VALUES (?, ?);', [user, senha]);
    return res;
  } catch (err) {
    
    const msg = (err && err.message) || '';
    if (msg.toLowerCase().includes('unique') || msg.toLowerCase().includes('constraint')) {
      const e = new Error('Usuário já existe');
      e.code = 'USER_EXISTS';
      throw e;
    }
    throw err;
  }
}

async function alterarSenha(user, novaSenha) {
  if (isWeb) {
    const users = readUsers();
    const idx = users.findIndex(u => u.user === user);
    if (idx === -1) return { rowsAffected: 0 };
    users[idx].senha = novaSenha;
    writeUsers(users);
    return { rowsAffected: 1 };
  }

  await criarTabela();
  const res = await execSql('UPDATE usuario SET senha = ? WHERE user = ?;', [novaSenha, user]);
  return { rowsAffected: res.rowsAffected != null ? res.rowsAffected : (res.rows ? res.rows.length : 0) };
}

async function autenticarUsuario(user, senha) {
  if (isWeb) {
    const users = readUsers();
    const found = users.find(u => u.user === user && u.senha === senha);
    if (found) return { id: found.id, user: found.user };
    return null;
  }

  await criarTabela();
  const res = await execSql('SELECT id, user FROM usuario WHERE user = ? AND senha = ? LIMIT 1;', [user, senha]);
  if (res && res.rows) {
    const rows = res.rows._array || [];
    if (rows.length > 0) return rows[0];
  }
  return null;
}

export { criarTabela, criarUsuario, alterarSenha, autenticarUsuario };
async function alterarUsuario(oldUser, newUser) {
  if (isWeb) {
    const users = readUsers();
    const idx = users.findIndex(u => u.user === oldUser);
    if (idx === -1) {
      return { rowsAffected: 0 };
    }
    if (users.find(u => u.user === newUser)) {
      const e = new Error('Usuário já existe');
      e.code = 'USER_EXISTS';
      throw e;
    }
    users[idx].user = newUser;
    writeUsers(users);
    return { rowsAffected: 1 };
  }

  await criarTabela();
  // try updating user, but UNIQUE constraint may raise error
  try {
    const res = await execSql('UPDATE usuario SET user = ? WHERE user = ?;', [newUser, oldUser]);
    return { rowsAffected: res.rowsAffected != null ? res.rowsAffected : (res.rows ? res.rows.length : 0) };
  } catch (err) {
    const msg = (err && err.message) || '';
    if (msg.toLowerCase().includes('unique') || msg.toLowerCase().includes('constraint')) {
      const e = new Error('Usuário já existe');
      e.code = 'USER_EXISTS';
      throw e;
    }
    throw err;
  }
}

export { alterarUsuario };
