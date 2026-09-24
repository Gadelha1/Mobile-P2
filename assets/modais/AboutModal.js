import React from 'react';
import { Modal, Pressable, View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from '../../styles/homeStyles';

export default function AboutModal({ visible, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.modalContainer} onPress={onClose}>
        <Pressable style={styles.modalView} onPress={() => {}}>
          <Text style={styles.aboutTitle}>Gabriel Alves Gadelha</Text>
          <Text style={styles.aboutLink} onPress={() => Linking.openURL('https://github.com/Gadelha1')}>https://github.com/Gadelha1</Text>
          <Text style={styles.aboutLink} onPress={() => Linking.openURL('mailto:gabriel.gadelha@fatec.sp.gov.br')}>gabriel.gadelha@fatec.sp.gov.br</Text>
          <Text style={styles.aboutText}>Sou o autor desta aplicação. Abaixo explico brevemente cada item do menu:</Text>
          <Text style={styles.aboutText}><Text style={{ fontWeight: '700' }}>Lista de Tarefas:</Text> Uma lista local para adicionar, marcar e remover tarefas do dia a dia.</Text>
          <Text style={styles.aboutText}><Text style={{ fontWeight: '700' }}>Gerador de Frases:</Text> Exibe o nome de músicas do Ednaldo Pereira em ordem aleatória.</Text>
          <Text style={styles.aboutText}><Text style={{ fontWeight: '700' }}>Calculadora de IMC:</Text> Calcula o índice de massa corporal a partir do peso e altura.</Text>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
