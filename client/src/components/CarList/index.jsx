import { FlatList, StyleSheet } from "react-native";
import db from "./../../DataBase/banco";
import { CarItem } from "../CarItem";

export default () => {
  const renderItem = ({ item }) => {
    return <CarItem {...item} />;
  };
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={db}
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
    paddingBottom:20
  },
});
