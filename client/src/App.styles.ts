import styled, { createGlobalStyle } from "styled-components";

export const Colors = {
    black: "#0c0c0c",
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
        font-family: Roboto;
    }

    body {
        background-color: ${Colors.black}
    }

    .background {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
