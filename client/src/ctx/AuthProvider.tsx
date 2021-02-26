import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
// Interfaces
import { IAuthCtxValue, IAuthUser } from "../interfaces/IAuth";

export const AuthContext = createContext<Partial<IAuthCtxValue>>({});

export const AuthProvider: React.FC = ({ children }) => {
    const [userState, setUserState] = useState<IAuthUser>({
        user: {},
        token: {},
    });

    const signIn = (un: string = "", pw: string = "") => {
        return "yes";
    };

    return (
        <AuthContext.Provider value={{ userState, setUserState, signIn }}>
            {children}
        </AuthContext.Provider>
    );
};
