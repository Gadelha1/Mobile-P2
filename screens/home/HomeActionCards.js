import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/homeStyles';

export default function HomeActionCards({ onOpenIMC, onOpenFrases, onOpenTarefas, onOpenCalculadora }) {
    const actions = [
        {
            key: 'imc',
            title: 'Calculadora de IMC',
            subtitle: 'Calcule seu IMC rapidamente',
            onPress: onOpenIMC,
        },
        {
            key: 'frases',
            title: 'Gerador de Frases',
            subtitle: 'Veja frases aleatórias',
            onPress: onOpenFrases,
        },
        {
            key: 'tarefas',
            title: 'Lista de Tarefas',
            subtitle: 'Abrir a lista de tarefas',
            onPress: onOpenTarefas,
        },
        {
            key: 'calculadora',
            title: 'Calculadora',
            subtitle: 'Acessar calculadora',
            onPress: onOpenCalculadora,
        },
    ];

    return (
        <View style={styles.cardRow}>
            {actions.map((action) => (
                <TouchableOpacity
                    key={action.key}
                    style={[styles.card]}
                    onPress={action.onPress}
                >
                    <Text style={styles.cardTitle}>{action.title}</Text>
                    <Text>{action.subtitle}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
