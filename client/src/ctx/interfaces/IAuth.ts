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
