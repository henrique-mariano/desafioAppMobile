import { StatusBar } from "expo-status-bar";
import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Ruluko_400Regular } from "@expo-google-fonts/ruluko";
import AppNavigate from "./components/AppNavigate";

/**
 * Componente principal do aplicativo.
 */
export default function App() {
  let [fontsLoaded] = useFonts({
    Ruluko_400Regular,
  });
  if (!fontsLoaded) {
    return <View></View>;
  }
  return <AppNavigate />;
}
