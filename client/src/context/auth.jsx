import React, { createContext, useState} from "react";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [valueAddVehicle, setValueAddVehicle] = useState("none");
    const [valueLoginScreen, setValueLoginScreen] = useState("flex");
    const [valueRegisterScreen, setValueRegisterScreen] = useState("flex");
    const navigation = useNavigation();

    function login(){
        setIsLoggedin(true);
        setValueAddVehicle("flex");
        setValueLoginScreen("none")
        setValueRegisterScreen("none")
    }

    function logout(){
        setIsLoggedin(false)
        setValueAddVehicle("none");
        setValueLoginScreen("flex")
        setValueRegisterScreen("flex")
        navigation.navigate("Home");
    }    

    return(
        <AuthContext.Provider value={{isLoggedin, login, logout, valueAddVehicle, valueLoginScreen, valueRegisterScreen}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;