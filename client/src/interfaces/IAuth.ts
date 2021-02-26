import React from "react";

// AuthContextValue
export interface IAuthCtxValue {
    userState: IAuthUser;
    setUserState: React.Dispatch<React.SetStateAction<IAuthUser>>;
    signIn: (un: string, pw: string) => void;
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
    LOADING_TEXT_LOGIN = "Logging In",
    LOADING_TEXT_SIGNUP = "Signing Up",
    FAILED = "clear",
}
