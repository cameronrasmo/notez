import React from "react";

// SystemContextValue
export interface ISysCtxValue {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}
