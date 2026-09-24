import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, Linking, useWindowDimensions } from 'react-native';
import styles from '../styles/homeStyles';
import { MenuModal, AboutModal, PasswordModal, UsernameModal } from '../assets/modais/modaisExport';
import { alterarSenha, autenticarUsuario, alterarUsuario } from '../database/banco';

export default function HomeScreen({ route, navigation }) {
  const initialUser = route?.params?.user ?? 'Usuário';
  const { width } = useWindowDimensions();
  const [user, setUser] = useState(initialUser);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [pwdModalVisible, setPwdModalVisible] = useState(false);
  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [msg, setMsg] = useState('');
  const [usernameModalVisible, setUsernameModalVisible] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [usernamePwd, setUsernamePwd] = useState('');
  const [usernameMsg, setUsernameMsg] = useState('');

  function openTarefas() {
    navigation.navigate('Tarefas');
  }

  function openCalculadora() {
    navigation.navigate('Calculadora');
  }

  async function handleLogout() {
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  }

  function openChangePassword() {
    setMenuVisible(false);
    setPwdModalVisible(true);
    setMsg('');
    setCurrentPwd('');
    setNewPwd('');
    setConfirmPwd('');
  }

  async function handleChangePassword() {
    setMsg('');
    if (!currentPwd || !newPwd) {
      setMsg('Preencha as senhas');
      return;
    }
    if (newPwd !== confirmPwd) {
      setMsg('As senhas não coincidem');
      return;
    }
    try {
      const auth = await autenticarUsuario(user, currentPwd);
      if (!auth) {
        setMsg('Senha atual inválida');
        return;
      }
      const res = await alterarSenha(user, newPwd);
      if (res && res.rowsAffected !== 0) {
        setMsg('Senha alterada com sucesso');
        setTimeout(() => setPwdModalVisible(false), 900);
      } else {
        setMsg('Erro ao alterar senha');
      }
    } catch (err) {
      console.error(err);
      setMsg('Erro ao alterar senha');
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#ffffff' },
      headerTintColor: '#111',
      headerTitleStyle: { color: '#111' },
      headerRight: () => (
        <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.headerTouchable}>
          <View style={styles.userIcon}>
            <Text style={styles.userIconText}>{user && user.length ? user[0].toUpperCase() : '👤'}</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation, user]);

  async function openChangeUsername() {
    setMenuVisible(false);
    setUsernameModalVisible(true);
    setNewUsername('');
    setUsernamePwd('');
    setUsernameMsg('');
  }

  async function handleChangeUsername() {
    setUsernameMsg('');
    if (!newUsername) {
      setUsernameMsg('Digite o novo usuário');
      return;
    }
    if (!usernamePwd) {
      setUsernameMsg('Digite sua senha atual');
      return;
    }
    try {
      const auth = await autenticarUsuario(user, usernamePwd);
      if (!auth) {
        setUsernameMsg('Senha inválida');
        return;
      }
      const res = await alterarUsuario(user, newUsername.trim());
      if (res && res.rowsAffected !== 0) {
        setUsernameMsg('Nome de usuário alterado');
        setUser(newUsername.trim());
        navigation.setParams({ user: newUsername.trim() });
        setTimeout(() => setUsernameModalVisible(false), 900);
      }
    } catch (err) {
      console.error(err);
      if (err && err.code === 'USER_EXISTS') {
        setUsernameMsg('Usuário já existe');
      } else {
        setUsernameMsg('Erro ao alterar usuário');
      }
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => setAboutVisible(true)}>
          <Text style={styles.navItemText}>Sobre a Aplicação</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.welcome}>Olá, {user}!</Text>

      <View style={styles.cardRow}>
        <TouchableOpacity style={[styles.card]} onPress={() => navigation.navigate('IMC')}>
          <Text 
            style={styles.cardTitle}>
              Calculadora de IMC
          </Text>
          
          <Text>
            Calcule seu IMC rapidamente
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.card]} 
          onPress={() => navigation.navigate('Frases')}>
          
          <Text 
            style={styles.cardTitle}>
              Gerador de Frases
          </Text>
          <Text>
            Veja frases aleatórias
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.card]} 
          onPress={openTarefas}>
          <Text 
            style={styles.cardTitle}>
              Lista de Tarefas
          </Text>
          
          <Text>
            Abrir a lista de tarefas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.card]} 
          onPress={openCalculadora}>
          <Text 
            style={styles.cardTitle}>
              Calculadora
          </Text>
          
          <Text>
            Acessar calculadora
          </Text>
        </TouchableOpacity>
      </View>

      {/* Menu simples (componente externo) */}
      <MenuModal
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onOpenChangeUsername={openChangeUsername}
        onOpenChangePassword={openChangePassword}
        onLogout={handleLogout}
      />

      <AboutModal visible={aboutVisible} onClose={() => setAboutVisible(false)} />

      <PasswordModal
        visible={pwdModalVisible}
        onClose={() => setPwdModalVisible(false)}
        user={user}
        currentPwd={currentPwd}
        setCurrentPwd={setCurrentPwd}
        newPwd={newPwd}
        setNewPwd={setNewPwd}
        confirmPwd={confirmPwd}
        setConfirmPwd={setConfirmPwd}
        msg={msg}
        setMsg={setMsg}
        handleChangePassword={handleChangePassword}
      />

      <UsernameModal
        visible={usernameModalVisible}
        onClose={() => setUsernameModalVisible(false)}
        user={user}
        newUsername={newUsername}
        setNewUsername={setNewUsername}
        usernamePwd={usernamePwd}
        setUsernamePwd={setUsernamePwd}
        usernameMsg={usernameMsg}
        setUsernameMsg={setUsernameMsg}
        handleChangeUsername={handleChangeUsername}
      />
    </View>
  );
}
