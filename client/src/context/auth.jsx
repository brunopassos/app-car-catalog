import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Api } from "../service/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [valueAddVehicle, setValueAddVehicle] = useState("none");
  const [valueLoginScreen, setValueLoginScreen] = useState("flex");
  const [valueRegisterScreen, setValueRegisterScreen] = useState("flex");
  const [dataBase, setDataBase] = useState([]);
  const [vehicleToEdit, setVehicleToEdit] = useState({});
  const navigation = useNavigation();

  function login() {
    setIsLoggedin(true);
    setValueAddVehicle("flex");
    setValueLoginScreen("none");
    setValueRegisterScreen("none");
  }

  function logout() {
    removeData();
    setDataBase([]);
    fetchData();
    orderData();
    setIsLoggedin(false);
    setValueAddVehicle("none");
    setValueLoginScreen("flex");
    setValueRegisterScreen("flex");
    navigation.navigate("Home");
  }

  const removeData = async () => {
    try {
      return await AsyncStorage.removeItem("@userToken");
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      return await AsyncStorage.getItem("@userToken");
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@userToken", value);
    } catch (e) {
      console.log(e);
    }
  };

  function orderData() {
    
    const filteredData = dataBase.sort(function (x, y) {
      return x.value - y.value;
    });
    setDataBase(filteredData);
  }

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

  return (
    <AuthContext.Provider
      value={{
        isLoggedin,
        login,
        logout,
        valueAddVehicle,
        valueLoginScreen,
        valueRegisterScreen,
        dataBase,
        setDataBase,
        getData,
        vehicleToEdit,
        setVehicleToEdit,
        storeData,
        orderData,
        fetchData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
