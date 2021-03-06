import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// Interfaces
import { IAuthCtxValue, IAuthUser, AuthStatus } from "../interfaces/IAuth";

export const AuthContext = createContext<Partial<IAuthCtxValue>>({});

const localStorageUser = localStorage.getItem("user");
const localStorageToken = localStorage.getItem("token");

export const AuthProvider: React.FC = ({ children }) => {
    const [userState, setUserState] = useState<IAuthUser>({
        user: JSON.parse(
            typeof localStorageUser === "string" ? localStorageUser : "{}"
        ),
        token: JSON.parse(
            typeof localStorageToken === "string" ? localStorageToken : "{}"
        ),
    });
    const [authStatus, setAuthStatus] = useState<{
        type: AuthStatus;
        errMsg: string | null;
    }>({
        type: AuthStatus.READY,
        errMsg: null,
    });

    const authenticate = (
        username: string = "",
        password: string = "",
        type: string
    ) => {
        setAuthStatus(prev => ({ ...prev, type: AuthStatus.LOADING }));
        axios
            .post(`http://localhost:8080/auth/${type}`, { username, password })
            .then(res => {
                setUserState(res.data);
                setAuthStatus(prev => ({ ...prev, type: AuthStatus.READY }));
                localStorage.setItem("user", JSON.stringify(res.data.user));
                localStorage.setItem("token", res.data.token);
            })
            .catch(err => {
                setAuthStatus({
                    type: AuthStatus.FAILED,
                    errMsg: err.response.data.errMsg,
                });
            });
    };

    return (
        <AuthContext.Provider
            value={{
                userState,
                setUserState,
                authenticate,
                authStatus,
                setAuthStatus,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
