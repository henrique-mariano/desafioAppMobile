import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

/**
 * Componente que renderiza a página de transações do aplicativo.
 * @param {any} {navigation} - Componente de navegação para redirecionar as telas da aplicação. 
 * @returns {View} Página de transação.
 */
export default function TransactionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Transaction navigation={navigation} />
    </View>
  );
}

const Transaction = ({ navigation }) => {
  return (
    <View>
      <View>
        <View style={{ left: -3, top: 25 }}>
          <Text style={{ color: "white", fontSize: 26 }}>Olá, amigo</Text>
        </View>
        <Pressable
          style={{ left: 300 }}
          onPress={() => navigation.navigate("Início")}
        >
          <FontAwesome name="sign-out" size={24} color="white" />
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          height: 500,
          top: 20,
          width: 326,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "gray", fontSize: 20, top: 215, left: 75 }}>
          Não há registros de{"\n"}  entrada ou saída
        </Text>
        <Pressable
          style={{
            backgroundColor: "#A328D6",
            height: 115,
            top: 460,
            width: 155,
            borderRadius: 5,
          }}
        >
          <View style={{ left: 10, top: 10 }}>
            <AntDesign name="pluscircleo" size={24} color="#fff" />
          </View>
          <Text style={{ color: "white", fontSize: 17, top: 40, left: 9 }}>
            Nova{"\n"}entrada
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#A328D6",
            height: 115,
            top: 345,
            width: 155,
            borderRadius: 5,
            left: 170,
          }}
        >
          <View style={{ left: 10, top: 10 }}>
            <AntDesign name="minuscircleo" size={24} color="#fff" />
          </View>
          <Text style={{ color: "white", fontSize: 17, top: 40, left: 9 }}>
            Nova{"\n"}saída
          </Text>
        </Pressable>
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
});
