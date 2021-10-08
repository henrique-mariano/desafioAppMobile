import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Home navigation={navigation} />
    </View>
  );
}

const Home = ({ navigation }) => {
  /**
   * Valores dos inputs.
   */
  const [valueEmail, onChangeEmail] = React.useState("");
  const [valueSenha, onChangeSenha] = React.useState("");

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "Ruluko_400Regular",
          fontSize: 32,
          top: 290,
        }}
      >
        MeuBalanço
      </Text>
      <TextInput
        style={[styles.inputBox, { top: 320 }]}
        textContentType="emailAddress"
        keyboardType="email-address"
        onChangeText={(text) => onChangeEmail(text)}
        value={valueEmail}
        placeholder="  E-mail"
      />
      <TextInput
        style={[styles.inputBox, { top: 330 }]}
        secureTextEntry={true}
        textContentType="password"
        onChangeText={(text) => onChangeSenha(text)}
        value={valueSenha}
        placeholder="  Senha"
      />
      <View
        style={{
          width: 326,
          height: 40,
          top: 340,
          borderRadius: 5,
        }}
      >
        <Button
          title="Entrar"
          onPress={() => navigation.navigate("Balanço")}
          color="#A328D6"
        />
      </View>
      <Pressable
        style={{ top: 360 }}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={{ color: "white" }}>
          Ainda não é cadastrado? Cadastre-se
        </Text>
      </Pressable>
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
