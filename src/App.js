import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddVehicle from "./pages/AddVehicle";

const Drawer = createDrawerNavigator();
export default function App() {

  const [isLoggedin, setIsLoggedin] = useState(true)
  return !isLoggedin ? (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" children={() => <Home isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>} />
        <Drawer.Screen name="Adicionar Veículo" component={AddVehicle} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
