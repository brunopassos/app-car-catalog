import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    width: 150,
    height: 58,
  },
});
