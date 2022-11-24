import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import LoginScreen from "../pages/Login";
import RegisterScreen from "../pages/Register";
import AddVehicleScreen from "../pages/AddVehicle";
import { AuthContext } from "../context/auth";

const Drawer = createDrawerNavigator();

export default function Routes() {
    const {valueAddVehicle, valueLoginScreen, valueRegisterScreen} = useContext(AuthContext);
  return (
    <Drawer.Navigator screenOptions={{drawerType: "slide", headerShown: false, }} initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen options={{drawerItemStyle: { display: valueLoginScreen }}} name="Login" component={LoginScreen} />
      <Drawer.Screen options={{drawerItemStyle: { display: valueRegisterScreen }}} name="Registrar" component={RegisterScreen} />
      <Drawer.Screen options={{drawerItemStyle: { display: valueAddVehicle }}} name="Adicionar Veículo" component={AddVehicleScreen} />
    </Drawer.Navigator>
  );
}
