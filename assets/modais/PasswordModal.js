import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/homeStyles';

export default function PasswordModal({
  visible,
  onClose,
  user,
  currentPwd,
  setCurrentPwd,
  newPwd,
  setNewPwd,
  confirmPwd,
  setConfirmPwd,
  msg,
  setMsg,
  handleChangePassword,
}) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalMessage}>Alterar senha de {user}</Text>

          <TextInput placeholder="Senha atual" secureTextEntry value={currentPwd} onChangeText={setCurrentPwd} style={styles.modalInput} />
          <TextInput placeholder="Nova senha" secureTextEntry value={newPwd} onChangeText={setNewPwd} style={styles.modalInput} />
          <TextInput placeholder="Confirme nova senha" secureTextEntry value={confirmPwd} onChangeText={setConfirmPwd} style={styles.modalInput} />

          {msg ? <Text style={styles.errorText}>{msg}</Text> : null}

          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.modalCancelButton} onPress={onClose}>
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton} onPress={handleChangePassword}>
              <Text style={styles.modalButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
