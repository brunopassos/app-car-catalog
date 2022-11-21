import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CarList from "../../components/CarList";

import Header from "../../components/Header";
import SearchBar from "../../components/searchBar";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <SearchBar />
      <CarList />
    </View>
  );
}
