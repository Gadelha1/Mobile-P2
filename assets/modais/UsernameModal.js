import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/homeStyles';

export default function UsernameModal({
  visible,
  onClose,
  user,
  newUsername,
  setNewUsername,
  usernamePwd,
  setUsernamePwd,
  usernameMsg,
  setUsernameMsg,
  handleChangeUsername,
}) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalMessage}>Alterar usuário atual ({user})</Text>

          <TextInput placeholder="Novo usuário" value={newUsername} onChangeText={setNewUsername} style={styles.modalInput} autoCapitalize="none" />
          <TextInput placeholder="Senha atual" secureTextEntry value={usernamePwd} onChangeText={setUsernamePwd} style={styles.modalInput} />

          {usernameMsg ? <Text style={styles.errorText}>{usernameMsg}</Text> : null}

          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.modalCancelButton} onPress={onClose}>
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton} onPress={handleChangeUsername}>
              <Text style={styles.modalButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
