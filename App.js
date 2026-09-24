import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import HomeScreen from './screens/home';
import ImcScreen from './screens/imc';
import FrasesScreen from './screens/frases';
import TarefasScreen from './screens/tarefas';
import CalculadoraScreen from './screens/calc';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="IMC" component={ImcScreen} />
        <Stack.Screen name="Frases" component={FrasesScreen} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} />
        <Stack.Screen name="Calculadora" component={CalculadoraScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
