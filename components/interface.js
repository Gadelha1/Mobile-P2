import React from 'react';
import { styles } from '../styles/calcStyles';
import { View, Text, TouchableOpacity } from 'react-native';

export function NumPad({ value, onChange, label, fontSize, dark }) {
    const keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '⌫'];

    const press = (k) => {
        if (k === '⌫') {
            onChange(value.slice(0, -1));
        } else if (k === '.' && value.includes('.')) {
            return;
        } else if (value.length >= 10) {
            return;
        } else {
            onChange(value + k);
        }
    };

    return (
        <View style={[styles.numPadContainer, dark && styles.numPadDark]}>
            <Text style={[styles.numPadLabel, { fontSize: fontSize * 0.75 }, dark && styles.textMutedDark]}>
                {label}
            </Text>
            <View style={[styles.display, dark && styles.displayDark]}>
                <Text style={[styles.displayText, { fontSize: fontSize * 1.1 }, dark && styles.textDark]}>
                    {value || '0'}
                </Text>
            </View>
            <View style={styles.grid}>
                {keys.map((k) => (
                    <TouchableOpacity
                        key={k}
                        style={[
                            styles.key,
                            dark && styles.keyDark,
                            k === '⌫' && styles.keyDelete,
                        ]}
                        onPress={() => press(k)}
                        activeOpacity={0.7}
                    >
                        <Text style={[
                            styles.keyText,
                            { fontSize: fontSize },
                            dark && styles.textDark,
                            k === '⌫' && { color: '#ff5252' },
                        ]}>
                            {k}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
