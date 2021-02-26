import React, { createContext, useState } from "react";
import { ISysCtxValue } from "../interfaces/ISystem";

const InitState: ISysCtxValue = {
    theme: "light",
    setTheme: t => t,
};

export const SystemContext = createContext<ISysCtxValue>(InitState);

export const SystemProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState<string>(
        window.matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : "dark"
    );
    return (
        <SystemContext.Provider value={{ theme, setTheme }}>
            {children}
        </SystemContext.Provider>
    );
};
