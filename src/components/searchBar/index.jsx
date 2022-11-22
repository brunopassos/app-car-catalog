import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Busque por marca, modelo, ano, cor..."
        style={styles.searchBar}
      />
      <TouchableOpacity style={styles.searchButton}>
        <Text>BUSCAR</Text>
      </TouchableOpacity>
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
  },
  searchButton: {
    backgroundColor: "#8ab2f2",
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
});
