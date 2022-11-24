import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./context/auth";
import Routes from "./routes";
import { LogBox } from "react-native";


export default function App() {
  LogBox.ignoreAllLogs()
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
