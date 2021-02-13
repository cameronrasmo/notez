import React, { createContext } from "react";

interface APState {
    user: {};
    token: {};
}

const InitState = {
    user: {},
    token: {},
};

export const AuthContext = createContext<APState>(InitState);

export const AuthProvider: React.FC = ({ children }) => {
    return (
        <AuthContext.Provider value={{ user: {}, token: {} }}>
            {children}
        </AuthContext.Provider>
    );
};
