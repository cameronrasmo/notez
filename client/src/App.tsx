import React from "react";
// Components
import Background from "./components/Background";
// Styles
import { Global } from "./App.styles";
import Auth from "./components/Auth";

const App = () => {
    return (
        <>
            <Global />
            <Background>
                <Auth />
            </Background>
        </>
    );
};

export default App;
