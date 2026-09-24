import React from 'react';
import { Modal, Pressable, TouchableOpacity, Text } from 'react-native';
import styles from '../../styles/homeStyles';

export default function MenuModal({ visible, onClose, onOpenChangeUsername, onOpenChangePassword, onLogout }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.menuContainer} onPress={onClose}>
        <Pressable style={styles.modalView} onPress={() => {}}>
          <TouchableOpacity onPress={onOpenChangeUsername} style={styles.menuItem}>
            <Text>Editar usuário</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onOpenChangePassword} style={styles.menuItem}>
            <Text>Editar senha</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onLogout} style={styles.menuItem}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={styles.menuClose}>
            <Text style={{ color: '#666' }}>Fechar</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
