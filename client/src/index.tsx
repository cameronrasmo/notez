import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SystemProvider } from "./ctx/SystemProvider";

ReactDOM.render(
    <React.StrictMode>
        <SystemProvider>
            <App />
        </SystemProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
