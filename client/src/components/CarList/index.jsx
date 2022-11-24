import { FlatList, StyleSheet } from "react-native";
import { CarItem } from "../CarItem";
import { useEffect, useContext } from "react";
import { Api } from "../../service/api";
import { AuthContext } from "../../context/auth";
import Home from "../../pages/Home";

export default () => {
  const { dataBase, setDataBase, getData, isLoggedin } = useContext(AuthContext);

  const fetchData = async () => {
    const token = await getData();

    if (!token) {
      Api.get("/vehicles")
        .then((res) => setDataBase(res.data))
        .catch((err) => console.log(err));
    } else {
      Api.get("/vehicles/me", {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => setDataBase(res.data))
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    fetchData();
  }, [isLoggedin, dataBase]);

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
