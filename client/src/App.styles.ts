import styled, { createGlobalStyle } from "styled-components";

export const Colors = {
    black: "#111111",
    white: "#F2F2F2",
    grey: "#222222",
    purple: "#BA48EF",
    teal: "#48C7EF",
    orange: "#EF4848",
};

export const Global = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    body {
        background-color: ${Colors.black}
    }

    .background {
        width: 100vw;
        height: 100vh;
    }
`;
