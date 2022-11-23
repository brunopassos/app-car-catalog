import "react-native-gesture-handler";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddVehicle from "./pages/AddVehicle";
import AuthProvider from "./context/auth";
import { AuthContext } from "./context/auth";

const Drawer = createDrawerNavigator();

export default function App() {

  const { isLoggedin } = useContext(AuthContext);

  return !isLoggedin ? (
    <NavigationContainer>
      <AuthProvider>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Register" component={Register} />
        </Drawer.Navigator>
      </AuthProvider>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <AuthProvider>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Adicionar Veículo" component={AddVehicle} />
        </Drawer.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
