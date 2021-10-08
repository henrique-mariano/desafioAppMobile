import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionScreen from "../screens/TransactionScreen";
import SigninScreen from "../screens/SigninScreen";
import LoginScreen from "../screens/LoginScreen";
import NewEntryScreen from "../screens/NewEntryScreen";
import NewExitScreen from "../screens/NewExitScreen";
/**
 * Pilha de navegação da aplicação.
 */
const Stack = createNativeStackNavigator();

/**
 * Componente que gerencia a navegação do aplicativo.
 * @returns {NavigationContainer} Um Componente de navegação.
 */
export default function AppNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={LoginScreen} />
        <Stack.Screen name="Balanço" component={TransactionScreen} />
        <Stack.Screen name="Cadastro" component={SigninScreen} />
        <Stack.Screen name="Entrada" component={NewEntryScreen} />
        <Stack.Screen name="Saída" component={NewExitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
