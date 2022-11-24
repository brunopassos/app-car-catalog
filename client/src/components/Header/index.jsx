import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/auth";

export default function Header() {
  const { isLoggedin, logout } = useContext(AuthContext);

  return !isLoggedin ? (
    <View style={styles.header}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
    </View>
  ) : (
    <View style={styles.headerSecondary}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 30
  },
  headerSecondary: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    flexDirection: "row",
    marginTop: 30
  },
  logo: {
    width: 150,
    height: 58,
  },
  logoutButton: {
    backgroundColor: "#8ab2f2",
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
});
