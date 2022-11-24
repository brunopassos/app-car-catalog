import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import CarList from "../../components/CarList";

import Header from "../../components/Header";
import SearchBar from "../../components/searchBar";
import { AuthContext } from "../../context/auth";

export default function Home() {

  const { fetchData } = useContext(AuthContext);

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <Header />
      <SearchBar />
      <CarList />
    </View>
  );
}
