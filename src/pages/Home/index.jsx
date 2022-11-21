import React from "react";
import { View } from "react-native";
import CarList from "../../components/CarList";

import Header from "../../components/Header";
import SearchBar from "../../components/searchBar";
import FilterOptions from "../../components/FilterOption";

export default function Home({isLoggedin, setIsLoggedin}) {
  return (
    <View style={{ flex: 1 }}>
      <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
      <SearchBar />
      <FilterOptions/>
      <CarList />
    </View>
  );
}
