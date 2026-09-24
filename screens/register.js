import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { criarUsuario } from '../database/banco';
import styles from '../styles/registerStyles';

export default function RegisterScreen({ navigation }) {
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  async function handleRegister() {
    setMessage('');
    setMessageType('');

    if (!user || !senha) {
      setMessage('Preencha usuário e senha');
      setMessageType('error');
      return;
    }

    try {
      await criarUsuario(user.trim(), senha);
      setMessage('Cadastro realizado. Você já pode fazer login.');
      setMessageType('success');
      setTimeout(() => navigation.navigate('Login'), 900);
    } catch (err) {
      console.error(err);
      if (err && err.code === 'USER_EXISTS') {
        setMessage('Usuário já existe');
        setMessageType('error');
      } else {
        setMessage('Erro ao cadastrar');
        setMessageType('error');
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        placeholder="Usuário"
        value={user}
        onChangeText={setUser}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={handleRegister} />
      {message ? (
        <Text style={[styles.message, messageType === 'error' ? styles.error : styles.success]}>
          {message}
        </Text>
      ) : null}
    </View>
  );
}