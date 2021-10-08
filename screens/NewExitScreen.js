import React from "react";
import { StyleSheet, Button, View, TextInput } from "react-native";

/**
 * Componente que renderiza a página de entrada do balanço do aplicativo.
 * @param {any} {navigation} - Componente de navegação para redirecionar as telas da aplicação.
 * @returns {View} Página de saída.
 */
export default function NewExitScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <NewExit navigation={navigation} />
    </View>
  );
}

const NewExit = ({ navigation }) => {
  /**
   * Estados dos inputs.
   */
  const [value, onChangeValue] = React.useState("");
  const [valueDescription, onChangeDescription] = React.useState("");

  return (
    <View>
      <View style={{ left: -3, top: 25 }}>
        <Text style={{ color: "white", fontSize: 26 }}>Nova saída</Text>
      </View>
      <View>
        <TextInput
          style={[styles.inputBox, { top: 46 }]}
          keyboardType="numbers-and-punctuation"
          onChangeText={(text) => onChangeValue(text)}
          value={value}
          placeholder="  Valor"
        ></TextInput>
        <TextInput
          style={[styles.inputBox, { top: 56 }]}
          onChangeText={(text) => onChangeDescription(text)}
          value={valueDescription}
          placeholder="  Descrição"
        ></TextInput>
        <View
          style={{
            width: 326,
            height: 40,
            top: 66,
            borderRadius: 5,
          }}
        >
          <Button
            title="Salvar saída"
            onPress={() => navigation.navigate("Balanço")}
            color="#A328D6"
          ></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  inputBox: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 326,
  },
});
