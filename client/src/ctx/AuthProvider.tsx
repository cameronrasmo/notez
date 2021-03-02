import React, { createContext, useState } from "react";
import axios from "axios";
// Interfaces
import { IAuthCtxValue, IAuthUser, AuthStatus } from "../interfaces/IAuth";

export const AuthContext = createContext<Partial<IAuthCtxValue>>({});

export const AuthProvider: React.FC = ({ children }) => {
    const [userState, setUserState] = useState<IAuthUser>({
        user: {},
        token: {},
    });
    const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.READY);

    const signIn = (username: string = "", password: string = "") => {
        setAuthStatus(AuthStatus.LOADING);
        axios
            .post("http://localhost:8080/auth", { username, password })
            .then(res => {
                alert(res.data);
                setAuthStatus(AuthStatus.READY);
            })
            .catch(err => setAuthStatus(AuthStatus.FAILED));
    };

    return (
        <AuthContext.Provider
            value={{
                userState,
                setUserState,
                signIn,
                authStatus,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
