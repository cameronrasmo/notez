import React, { useContext } from "react";
// Components
import Background from "./components/Background";
// Context
import { SystemContext } from "./ctx/SystemProvider";
// Styles
import { Global } from "./App.styles";
import Auth from "./components/auth/Auth";

const App = () => {
    const { theme } = useContext(SystemContext);
    return (
        <div>
            <Global theme={theme} />
            <Background>
                <Auth />
            </Background>
        </div>
    );
};

export default App;
