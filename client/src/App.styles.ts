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
        font-family: Roboto;
        color: ${Colors.white}
    }

    body {
        background-color: ${Colors.black};
        width: 100vw;
        height: 100vh;
        overflow: scroll;
    }

    .background {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        h1 {
            font-weight: 400;
            font-size: 22px;
        }
    }
`;
