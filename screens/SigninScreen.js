import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";

/**
 * Componente de cadastro
 * Recebe: Componente de navegação para redirecionar para outra tela após o cadastro.
 * */
export default function SigninScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Signin navigation={navigation} />
    </View>
  );
}

const Signin = ({ navigation }) => {
  /**
   * Valores dos inputs.
   */
  const [valueNome, onChangeNome] = React.useState("");
  const [valueEmail, onChangeEmail] = React.useState("");
  const [valueSenha, onChangeSenha] = React.useState("");
  const [valueSenhaConfirm, onChangeSenhaConfirm] = React.useState("");

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
          top: 160,
        }}
      >
        MeuBalanço
      </Text>
      {/**
       * Input de nome
       */}
      <TextInput
        style={[styles.inputBox, { top: 210 }]}
        onChangeText={(text) => onChangeNome(text)}
        value={valueNome}
        placeholder="  Nome"
      />
      {/**
       * Input de email
       */}
      <TextInput
        style={[styles.inputBox, { top: 220 }]}
        textContentType="emailAddress"
        keyboardType="email-address"
        onChangeText={(text) => onChangeEmail(text)}
        value={valueEmail}
        placeholder="  E-mail"
      />
      {/**
       * Input de senha
       */}
      <TextInput
        style={[styles.inputBox, { top: 230 }]}
        secureTextEntry={true}
        textContentType="password"
        onChangeText={(text) => onChangeSenha(text)}
        value={valueSenha}
        placeholder="  Senha"
      />
      {/**
       * Input de confirmação de senha
       */}
      <TextInput
        style={[styles.inputBox, { top: 240 }]}
        secureTextEntry={true}
        textContentType="password"
        onChangeText={(text) => onChangeSenhaConfirm(text)}
        value={valueSenhaConfirm}
        placeholder="  Confirme a senha"
      />
      <View
        style={{
          width: 326,
          height: 40,
          top: 250,
          borderRadius: 5,
        }}
      >
        <Button
          title="Cadastrar"
          onPress={() => navigation.navigate("Início")}
          color="#A328D6"
        />
      </View>
      <Pressable
        style={{ top: 260 }}
        onPress={() => navigation.navigate("Início")}
      >
        <Text style={{ color: "white" }}>Já tem uma conta? Entre agora!</Text>
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
