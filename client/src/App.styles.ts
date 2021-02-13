import styled, { createGlobalStyle } from "styled-components";

export const Colors = {
    black: "#111111",
    white: "#F2F2F2",
    grey: "#222222",
    purple: "#BA48EF",
    teal: "#48C7EF",
    orange: "#EF4848",
};

interface Props {
    theme: string;
}

export const Global = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: Roboto;
    }

    body {
        background-color: ${(props: Props) =>
            props.theme === "light" ? Colors.white : Colors.black};
        color: ${(props: Props) =>
            props.theme === "light" ? Colors.black : Colors.white}
    }

    button, input, i {
        transition-timing-function: cubic-bezier(0, 0, 0.5, 1);
    }

    .background {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        z-index: -1;
        overflow: hidden;

        h1 {
            font-weight: 400;
            font-size: 22px;
        }
    }

    @media(max-width: 600px){
        .background {
            overflow: scroll;
        }
    }
`;
