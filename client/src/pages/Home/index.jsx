import React, { useContext } from "react";
import { View } from "react-native";
import CarList from "../../components/CarList";

import Header from "../../components/Header";
import SearchBar from "../../components/searchBar";
import FilterOptions from "../../components/FilterOption";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <SearchBar />
      <FilterOptions />
      <CarList />
    </View>
  );
}
