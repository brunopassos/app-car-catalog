import { FlatList, StyleSheet } from "react-native";
import { CarItem } from "../CarItem";
import { useEffect, useContext } from "react";
import { Api } from "../../service/api";
import { AuthContext } from "../../context/auth";

export default () => {
  const { dataBase } =    useContext(AuthContext);  

  const renderItem = ({ item }) => {
    return <CarItem {...item} />;
  };
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={dataBase}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingBottom: 20,
  },
});
