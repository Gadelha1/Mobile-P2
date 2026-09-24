import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/frasesStyles';

const frases = [
  "Banido",
  "Desbanido",
  "Vale Tudo",
  "Vale Nada",
  "Adriana",
  "Who Is The Sister"
];

export default function FrasesScreen() {
  const [frase, setFrase] = useState('Toque no botão');

  const gerarFrase = () => {
    const indice = Math.floor(Math.random() * frases.length);
    setFrase(frases[indice]);
  };

  const limparFrase = () => {
    setFrase('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador Aleatório Músicas Ednaldo Pereira</Text>
      
      <View style={styles.card}>
        <Text style={styles.frase}>
          {frase}
        </Text>
      </View>
    

      <View style={styles.btnBox} >

        <Pressable style={({pressed}) => [styles.btn, pressed && {opacity: 0.8}]} 
        onPress={gerarFrase}>
          <Text style={styles.btnTxt}>
            Gerar
          </Text>
        </Pressable>

        <Pressable style={({pressed}) => [styles.btnSec, pressed && {opacity: 0.8}]}  onPress={limparFrase}>
          <Text style={styles.btnTxt}>
          Limpar
          </Text>
        </Pressable>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}
