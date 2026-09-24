import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Slider } from 'react-native-elements';
import { TelaSoma, TelaSubtracao, TelaDivisao, TelaMultiplicacao, TelaResultado } from '../utils/calcOperations';
import { NumPad } from '../components/interface';
import { styles } from '../styles/calcStyles';

export default function CalcScreen() {
    const [dark, setDark] = useState(false);
    const [fontSize, setFontSize] = useState(18);
    const [activeTab, setActiveTab] = useState(0);
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const tabs = ['Soma', 'Multiplicação', 'Divisão', 'Subtração', 'Resultado'];
    const bg = dark ? '#1a1a2e' : '#f0f4ff';
    const tabBg = dark ? '#16213e' : '#ffffff';
    const activeBg = dark ? '#0f3460' : '#3a7bd5';

    const renderScreen = () => {
        const props = { num1, num2, fontSize, dark };
        switch (activeTab) {
            case 0: return <TelaSoma {...props} />;
            case 1: return <TelaMultiplicacao {...props} />;
            case 2: return <TelaDivisao {...props} />;
            case 3: return <TelaSubtracao {...props} />;
            case 4: return <TelaResultado {...props} />;
            default: return null;
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles.safe, { backgroundColor: bg }]}>
                <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} backgroundColor={bg} />
                <ScrollView contentContainerStyle={[styles.container, { backgroundColor: bg }]}>
                    <View style={[styles.header, { backgroundColor: tabBg }]}>
                        <Text style={[styles.headerTitle, { fontSize: fontSize * 1.1 }, dark && styles.textDark]}>
                            Calculadora
                        </Text>
                        <View style={styles.headerControls}>
                            <View style={styles.controlRow}>
                                <Text style={[styles.controlLabel, { fontSize: fontSize * 0.7 }, dark && styles.textMutedDark]}>
                                    {dark ? '🌙' : '☀️ '}
                                </Text>
                                <Switch
                                    value={dark}
                                    onValueChange={setDark}
                                    trackColor={{ false: '#ccc', true: '#0f3460' }}
                                    thumbColor={dark ? '#3a7bd5' : '#fff'}
                                />
                            </View>
                            <View style={styles.controlRow}>
                                <Text style={[styles.controlLabel, { fontSize: fontSize * 0.7 }, dark && styles.textMutedDark]}>
                                    Fonte ({Math.round(fontSize)})
                                </Text>
                                <Slider
                                    style={{ width: 120, height: 30 }}
                                    minimumValue={12}
                                    maximumValue={28}
                                    thumbStyle={{ width: 14, height: 14, borderRadius: 7 }}
                                    value={fontSize}
                                    onValueChange={setFontSize}
                                    minimumTrackTintColor="#3a7bd5"
                                    maximumTrackTintColor={dark ? '#444' : '#ccc'}
                                    thumbTintColor="#3a7bd5"
                                />
                            </View>
                        </View>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={[styles.tabBar, { backgroundColor: tabBg }]}
                        contentContainerStyle={styles.tabBarContent}
                    >
                        {tabs.map((t, i) => (
                            <TouchableOpacity
                                key={t}
                                style={[styles.tab, i === activeTab && { backgroundColor: activeBg }]}
                                onPress={() => setActiveTab(i)}
                                activeOpacity={0.8}
                            >
                                <Text style={[
                                    styles.tabText,
                                    { fontSize: fontSize * 0.75 },
                                    dark && styles.textMutedDark,
                                    i === activeTab && styles.tabTextActive,
                                ]}>
                                    {t}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {renderScreen()}

                    <View style={styles.padsRow}>
                        <NumPad value={num1} onChange={setNum1} label="Número 1" fontSize={fontSize} dark={dark} />
                        <NumPad value={num2} onChange={setNum2} label="Número 2" fontSize={fontSize} dark={dark} />
                    </View>

                    <TouchableOpacity
                        style={[styles.clearBtn, dark && styles.clearBtnDark]}
                        onPress={() => { setNum1(''); setNum2(''); }}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.clearBtnText, { fontSize: fontSize * 0.85 }]}>
                            Limpar Tudo
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}