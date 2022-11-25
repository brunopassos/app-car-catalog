import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import LoginScreen from "../pages/Login";
import RegisterScreen from "../pages/Register";
import AddVehicleScreen from "../pages/AddVehicle";
import EditVehicleScreen from "../pages/EditVehicle";
import { AuthContext } from "../context/auth";

import { Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons"


const Drawer = createDrawerNavigator();

export default function Routes() {
    const {valueAddVehicle, valueLoginScreen, valueRegisterScreen} = useContext(AuthContext);
  return (
    <Drawer.Navigator screenOptions={{drawerType: "slide", headerShown: true,  }} initialRouteName="Home">
      <Drawer.Screen options={{drawerIcon: ({size, color}) => (<Entypo name="home" size={size} color={color} />)}} name="Home" component={Home} />
      <Drawer.Screen options={{drawerItemStyle: { display: valueLoginScreen }, drawerIcon: ({size, color}) => (<Entypo name="login" size={size} color={color} />)}} name="Login" component={LoginScreen} />
      <Drawer.Screen options={{drawerItemStyle: { display: valueRegisterScreen}, drawerIcon: ({size, color}) => (<Entypo name="add-user" size={size} color={color} />)}} name="Registrar" component={RegisterScreen} />
      <Drawer.Screen options={{drawerItemStyle: { display: valueAddVehicle }, drawerIcon: ({size, color}) => (<MaterialCommunityIcons name="car" size={size} color={color} />)}} name="Adicionar Veículo" component={AddVehicleScreen} />
      <Drawer.Screen options={{drawerItemStyle: { display: "none" }}} name="Editar Veículo" component={EditVehicleScreen} />
    </Drawer.Navigator>
  );
}
