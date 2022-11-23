import React, { createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [isLoggedin, setIsLoggedin] = useState(false);

    

    return(
        <AuthContext.Provider value={{isLoggedin, setIsLoggedin}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;