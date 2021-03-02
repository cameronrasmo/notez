import styled, { keyframes } from "styled-components";
import { Colors } from "../../App.styles";
import { AuthStatus } from "../../interfaces/IAuth";

interface StyledProps {
    theme: string;
    authType: string | null;
    authStatus?: {
        type: AuthStatus;
        errMsg: string | null;
    };
}

export const introAnimation = keyframes`
    0% {
        opacity: 0;
        left: -100px;

    }
    100% {
        opacity: 1;
        left: 0px;
    }
`;

export const introAnimationLogo = keyframes`
    0% {
        opacity: 0;
        bottom: -100px;

    }
    100% {
        opacity: 1;
        bottom: 0px;
    }
`;

export const Image = styled.img`
    height: 90vh;
    position: absolute;
    right: 0px;
    bottom: 0px;
    line-height: 1;
    color: ${Colors.black};
    z-index: -1;
    opacity: 0;

    animation: 1s ${introAnimationLogo} forwards;
    animation-delay: 2s;
    animation-timing-function: cubic-bezier(0, 0, 0.1, 1);

    @media (max-width: 600px) {
        height: 30vh;
    }
`;

export const Container = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    padding: 0px 30px;
`;

export const AuthContainer = styled(Container)`
    div {
        flex-direction: row;
        width: 100%;
    }

    h1 {
        position: relative;
        left: 0px;
        opacity: 0;
        animation: 1s ${introAnimation} forwards;
        animation-delay: 0.3s;
        animation-timing-function: cubic-bezier(0, 0, 0.1, 1);
    }

    input {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid
            ${(props: StyledProps) =>
                props.authStatus?.errMsg === "Fields Required"
                    ? "red"
                    : props.theme === "light"
                    ? `${Colors.black}b3`
                    : `${Colors.white}b3`};
        border-radius: 0px;
        font-size: 15px;

        margin: 10px 0px;
        padding: 5px 0px;
        width: 35%;
        margin-right: 10px;
        outline: none;
        opacity: 0;
        left: 0px;
        position: relative;
        color: ${(props: StyledProps) =>
            props.theme === "light"
                ? `${Colors.black}b3`
                : `${Colors.white}b3`};

        transition: 0.2s;

        animation: 0.6s ${introAnimation} forwards;

        animation-timing-function: cubic-bezier(0, 0, 0.1, 1);

        &:nth-child(1) {
            animation-delay: 0.2s;
        }

        &:nth-child(2) {
            animation-delay: 0.1s;
        }

        &:focus {
            border-bottom: 2px solid ${Colors.white};
            color: ${(props: StyledProps) =>
                props.theme === "light"
                    ? `${Colors.black}`
                    : `${Colors.white}`};
        }
    }

    button {
        margin-left: auto;
        min-width: 75px;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        background-color: transparent;
        outline: none;
        border: none;
        border-bottom: 2px solid transparent;
        color: ${(props: StyledProps) =>
            props.theme === "light"
                ? `${Colors.black}b3`
                : `${Colors.white}b3`};

        cursor: pointer;

        opacity: 0;
        left: 0px;
        position: relative;

        font-size: 15px;

        transition: 0.2s;

        animation: 0.6s ${introAnimation} forwards;
        animation-timing-function: cubic-bezier(0, 0, 0.1, 1);

        &:nth-child(1) {
            animation-delay: ${(props: StyledProps) =>
                props.authType ? "0.4s" : "2s"};
        }

        &:nth-child(2) {
            animation-delay: ${(props: StyledProps) =>
                props.authType ? "0.4s" : "1.9s"};
        }

        i,
        img {
            left: 0px;
            position: relative;
            margin-left: 10px;

            color: ${(props: StyledProps) =>
                props.theme === "light"
                    ? `${Colors.black}b3`
                    : `${Colors.white}b3`};

            transition: 0.2s;
        }

        &:hover {
            color: ${(props: StyledProps) =>
                props.theme === "light"
                    ? `${Colors.black}`
                    : `${Colors.white}`};

            i,
            img {
                left: 5px;
                color: ${(props: StyledProps) =>
                    props.theme === "light"
                        ? `${Colors.black}`
                        : `${Colors.white}`};
            }
        }
    }
    transition: 0.2s;

    @media (max-width: 1000px) {
        div {
            flex-direction: column;
        }
        button {
            margin: 10px 0px;
            margin-left: auto;
        }
        input {
            width: 100%;
            margin-right: 0px;
        }
    }
`;

export const LogoContainer = styled(Container)`
    @media (max-width: 600px) {
        position: absolute;
        width: 100vw;
        height: 100vh;
        bottom: 0px;
        right: 0px;
    }
    z-index: -1;
`;
