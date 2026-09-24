import { View, Text, } from 'react-native';
import { styles } from '../styles/calcStyles';

export function TelaDivisao({ num1, num2, fontSize, dark }) {
    const n2 = parseFloat(num2 || 0);
    const result = n2 === 0 ? 'Erro' : parseFloat(num1 || 0) / n2;
    return (
        <View style={[styles.resultBox, dark && styles.resultBoxDark]}>
            <Text style={[styles.operationLabel, { fontSize: fontSize * 0.85 }, dark && styles.textDark]}>
                Divisão
            </Text>
            <Text style={[styles.resultText, { fontSize: fontSize * 1.4 }, dark && styles.textDark]}>
                {num1 || '0'} ÷ {num2 || '0'} ={' '}
                <Text style={[styles.highlight, result === 'Erro' && { color: '#ff5252' }]}>
                    {result === 'Erro' ? 'Div/0!' : isNaN(result) ? '?' : parseFloat(result.toFixed(6))}
                </Text>
            </Text>
        </View>
    );
}

export function TelaMultiplicacao({ num1, num2, fontSize, dark }) {
    const result = parseFloat(num1 || 0) * parseFloat(num2 || 0);
    return (
        <View style={[styles.resultBox, dark && styles.resultBoxDark]}>
            <Text style={[styles.operationLabel, { fontSize: fontSize * 0.85 }, dark && styles.textDark]}>
                Multiplicação
            </Text>
            <Text style={[styles.resultText, { fontSize: fontSize * 1.4 }, dark && styles.textDark]}>
                {num1 || '0'} × {num2 || '0'} = <Text style={styles.highlight}>{isNaN(result) ? '?' : result}</Text>
            </Text>
        </View>
    );
}

export function TelaSoma({ num1, num2, fontSize, dark }) {
    const result = parseFloat(num1 || 0) + parseFloat(num2 || 0);
    return (
        <View style={[styles.resultBox, dark && styles.resultBoxDark]}>
            <Text style={[styles.operationLabel, { fontSize: fontSize * 0.85 }, dark && styles.textDark]}>
                Soma
            </Text>
            <Text style={[styles.resultText, { fontSize: fontSize * 1.4 }, dark && styles.textDark]}>
                {num1 || '0'} + {num2 || '0'} = <Text style={styles.highlight}>{isNaN(result) ? '?' : result}</Text>
            </Text>
        </View>
    );
}

export function TelaSubtracao({ num1, num2, fontSize, dark }) {
    const result = parseFloat(num1 || 0) - parseFloat(num2 || 0);
    return (
        <View style={[styles.resultBox, dark && styles.resultBoxDark]}>
            <Text style={[styles.operationLabel, { fontSize: fontSize * 0.85 }, dark && styles.textDark]}>
                Subtração
            </Text>
            <Text style={[styles.resultText, { fontSize: fontSize * 1.4 }, dark && styles.textDark]}>
                {num1 || '0'} - {num2 || '0'} = <Text style={styles.highlight}>{isNaN(result) ? '?' : result}</Text>
            </Text>
        </View>
    );
}

export function TelaResultado({ num1, num2, fontSize, dark }) {
    const n1 = parseFloat(num1 || 0);
    const n2 = parseFloat(num2 || 0);
    const ops = [
        { label: 'Soma', symbol: '+', value: n1 + n2 },
        { label: 'Subtração', symbol: '-', value: n1 - n2 },
        { label: 'Multiplicação', symbol: '×', value: n1 * n2 },
        { label: 'Divisão', symbol: '÷', value: n2 === 0 ? null : n1 / n2 },
    ];
    return (
        <View style={[styles.resultBox, dark && styles.resultBoxDark]}>
            <Text style={[styles.operationLabel, { fontSize: fontSize * 0.85 }, dark && styles.textDark]}>
                Resultado Completo
            </Text>
            {ops.map((op) => (
                <View key={op.label} style={styles.summaryRow}>
                    <Text style={[styles.summaryLabel, { fontSize: fontSize * 0.8 }, dark && styles.textMutedDark]}>
                        {op.label}:
                    </Text>
                    <Text style={[styles.summaryValue, { fontSize: fontSize * 0.9 }, dark && styles.textDark]}>
                        {n1} {op.symbol} {n2} ={' '}
                        <Text style={styles.highlight}>
                            {op.value === null
                                ? 'Div/0!'
                                : isNaN(op.value)
                                    ? '?'
                                    : parseFloat(op.value.toFixed(6))}
                        </Text>
                    </Text>
                </View>
            ))}
        </View>
    );
}
