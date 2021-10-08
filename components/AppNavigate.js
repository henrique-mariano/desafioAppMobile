import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import TransactionScreen from "../screens/TransactionScreen";
import SigninScreen from "../screens/SigninScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Balanço" component={TransactionScreen} />
        <Stack.Screen name="Cadastro" component={SigninScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
