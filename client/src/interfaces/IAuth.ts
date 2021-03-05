import React from "react";

export interface IAuthCtxValue {
    userState: IAuthUser;
    setUserState: React.Dispatch<React.SetStateAction<IAuthUser>>;
    authenticate: (un: string, pw: string, type: string) => void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    authStatus: { type: AuthStatus; errMsg: string | null };
    setAuthStatus: React.Dispatch<
        React.SetStateAction<{ type: AuthStatus; errMsg: string | null }>
    >;
}

export interface IAuthUser {
    user: object;
    token: object;
}

export enum AuthTypes {
    SIGNUP = "signup",
    LOGIN = "login",
}

export enum AuthStatus {
    READY = "arrow_forward",
    LOADING = "https://i.gifer.com/ZZ5H.gif",
    FAILED = "clear",
}
