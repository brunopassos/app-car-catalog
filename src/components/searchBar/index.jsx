import React from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Busque por marca, modelo, ano, cor..."
        style={styles.searchBar}
      />
      <Button title="Buscar"/>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#3374DB",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
    height: 78,
  },
  searchBar: {
    backgroundColor: "#fff",
    width: "70%",
    height: 48,
    borderRadius: 8,
    paddingLeft: 10,
  }
});
