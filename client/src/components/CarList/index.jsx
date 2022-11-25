import { useContext } from "react";
import { FlatList, StyleSheet } from "react-native";
import { CarItem } from "../CarItem";
import { AuthContext } from "../../context/auth";
import NoData from "../NoData";

export default () => {
  const { dataBase } = useContext(AuthContext);

  const renderItem = ({ item }) => {
    return <CarItem {...item} />;
  };
  return dataBase.length != 0 ? (
    <FlatList
      contentContainerStyle={styles.container}
      data={dataBase}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
    />
  ) : (
    <NoData />
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
