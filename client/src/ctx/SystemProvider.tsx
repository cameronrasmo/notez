import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useState,
} from "react";

interface SPState {
    theme: string;
    setTheme?: Dispatch<SetStateAction<string>>;
}

const InitState: SPState = {
    theme: "light",
};

export const SystemContext = createContext<SPState>(InitState);

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
