import React from "react";
// Components
import Background from "./components/Background";
// Styles
import { Global } from "./App.styles";

const App = () => {
    return (
        <>
            <Global />
            <Background>
                <div>yes</div>
            </Background>
        </>
    );
};

export default App;
