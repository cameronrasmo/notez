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
                console.log(res.data);
                setAuthStatus(prev => ({ ...prev, type: AuthStatus.READY }));
            })
            .catch(err => {
                console.dir(err);
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
