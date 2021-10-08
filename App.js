import React from "react";
import { View } from "react-native";
import { useFonts, Ruluko_400Regular } from "@expo-google-fonts/ruluko";
import AppNavigate from "./components/AppNavigate";

/**
 * Componente principal do aplicativo.
 */
export default function App() {
  /** Enquanto a fonte não carregar o aplicativo não é renderizado */
  let [fontsLoaded] = useFonts({
    Ruluko_400Regular,
  });
  if (!fontsLoaded) {
    return <View></View>;
  }
  return <AppNavigate />;
}
