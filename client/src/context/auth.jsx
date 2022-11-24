import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    setDataBase([]);
    setIsLoggedin(false);
    setValueAddVehicle("none");
    setValueLoginScreen("flex");
    setValueRegisterScreen("flex");
    navigation.navigate("Home");
    removeData();
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
