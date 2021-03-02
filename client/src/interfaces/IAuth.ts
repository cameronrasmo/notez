import React from "react";

// AuthContextValue
export interface IAuthCtxValue {
    userState: IAuthUser;
    setUserState: React.Dispatch<React.SetStateAction<IAuthUser>>;
    signIn: (un: string, pw: string) => void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    authStatus: string;
}
// AuthUser
export interface IAuthUser {
    user: object;
    token: object;
}
// Sign up AuthTypes
export enum AuthTypes {
    SIGNUP = "signup",
    LOGIN = "login",
}

export enum AuthStatus {
    READY = "arrow_forward",
    LOADING = "https://i.gifer.com/ZZ5H.gif",
    FAILED = "clear",
}
