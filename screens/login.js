import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/loginStyles';
import { autenticarUsuario } from '../database/banco';

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'error' | 'success'

  async function handleLogin() {
    setMessage('');
    setMessageType('');
    if (!user || !senha) {
      setMessage('Preencha usuário e senha');
      setMessageType('error');
      return;
    }
    try {
      const resultado = await autenticarUsuario(user.trim(), senha);
      if (resultado) {
        navigation.reset({ index: 0, routes: [{ name: 'Home', params: { user: resultado.user } }] });
      } else {
        setMessage('Credenciais inválidas');
        setMessageType('error');
      }
    } catch (err) {
      console.error(err);
      setMessage('Erro ao autenticar');
      setMessageType('error');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <Button title="Entrar" onPress={handleLogin} />
      {message ? (
        <Text style={[styles.message, messageType === 'error' ? styles.error : styles.success]}>{message}</Text>
      ) : null}

      <View style={styles.registerRow}>
        <Text>Não tem conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}> Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// styles moved to ../styles/loginStyles.js
