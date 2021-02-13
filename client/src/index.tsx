import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./ctx/AuthProvider";
import { SystemProvider } from "./ctx/SystemProvider";

ReactDOM.render(
    <React.StrictMode>
        <SystemProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </SystemProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
