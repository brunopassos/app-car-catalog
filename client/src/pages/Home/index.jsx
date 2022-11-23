import React, { useContext } from "react";
import { View } from "react-native";
import CarList from "../../components/CarList";

import Header from "../../components/Header";
import SearchBar from "../../components/searchBar";
import FilterOptions from "../../components/FilterOption";
import { AuthContext } from "../../context/auth";

export default function Home() {
  const { isLoggedin, value } = useContext(AuthContext);
  console.log("home: ", value)
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <SearchBar />
      <FilterOptions />
      <CarList />
    </View>
  );
}
