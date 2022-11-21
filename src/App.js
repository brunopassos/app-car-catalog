import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity, Text } from "react-native";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddVehicle from "./pages/AddVehicle";

const Drawer = createDrawerNavigator();
const teste = false;
export default function App() {
  return teste ? (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Adicionar Veículo">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Adicionar Veículo" component={AddVehicle} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
