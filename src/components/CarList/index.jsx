import { FlatList, StyleSheet } from "react-native";
import db from "./../../DataBase/banco";
import { CarItem } from "../CarItem";

export default ({isLoggedin}) => {
  const renderItem = ({ item }) => {
    return <CarItem {...item} isLoggedin={isLoggedin} />;
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
