import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "../../App.styles";
import LogoLight from "../../images/logoLight.png";
import LogoDark from "../../images/logoDark.png";
import { SystemContext } from "../../ctx/SystemProvider";

interface Props {
    theme: string;
}

interface IFormState {
    username: string;
    password: string;
}

const Auth: React.FC = () => {
    const { theme } = useContext(SystemContext);
    const [authType, setAuthType] = useState<string>("signup");
    const [formState, setFormState] = useState<IFormState>({
        username: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            <Container>
                <AuthContainer theme={theme}>
                    <h1>
                        Because you totally asked for another note taking app.
                    </h1>
                    <div style={{ display: "flex" }}>
                        <input
                            name='username'
                            type='text'
                            placeholder='Username'
                            value={formState.username}
                            onChange={handleChange}
                        />
                        <input
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <button>
                            Log in{" "}
                            <i className='material-icons'>arrow_forward</i>
                        </button>
                    </div>
                </AuthContainer>
            </Container>
            <LogoContainer>
                <Image src={theme === "light" ? LogoLight : LogoDark} />
            </LogoContainer>
        </>
    );
};

const introAnimation = keyframes`
    0% {
        opacity: 0;
        left: -100px;

    }
    100% {
        opacity: 1;
        left: 0px;
    }
`;

const introAnimationLogo = keyframes`
    0% {
        opacity: 0;
        bottom: -100px;

    }
    100% {
        opacity: 1;
        bottom: 0px;
    }
`;

const Image = styled.img`
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

const Container = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    padding: 0px 30px;
`;

const AuthContainer = styled(Container)`
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
            ${(props: Props) =>
                props.theme === "light"
                    ? `${Colors.black}b3`
                    : `${Colors.white}b3`};
        border-radius: 0px;
        font-size: 15px;

        margin: 10px 0px;
        padding: 5px 0px;
        margin-right: 20px;
        outline: none;
        opacity: 0;
        left: 0px;
        position: relative;
        color: ${(props: Props) =>
            props.theme === "light"
                ? `${Colors.black}b3`
                : `${Colors.white}b3`};

        transition: 0.2s;

        animation: 0.6s ${introAnimation} forwards;
        animation-delay: 2s;
        animation-timing-function: cubic-bezier(0, 0, 0.1, 1);

        &:focus {
            border-bottom: 2px solid ${Colors.white};
            color: ${(props: Props) =>
                props.theme === "light"
                    ? `${Colors.black}`
                    : `${Colors.white}`};
        }
    }

    button {
        margin-left: auto;
        min-width: 75px;

        flex: 0.5;
        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: transparent;
        outline: none;
        border: none;
        color: ${(props: Props) =>
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
        animation-delay: 2.1s;
        animation-timing-function: cubic-bezier(0, 0, 0.1, 1);

        i {
            left: 0px;
            position: relative;

            color: ${(props: Props) =>
                props.theme === "light"
                    ? `${Colors.black}b3`
                    : `${Colors.white}b3`};

            transition: 0.2s;
        }

        &:hover {
            color: ${(props: Props) =>
                props.theme === "light"
                    ? `${Colors.black}`
                    : `${Colors.white}`};

            i {
                left: 5px;
                color: ${(props: Props) =>
                    props.theme === "light"
                        ? `${Colors.black}`
                        : `${Colors.white}`};
            }
        }
    }
    transition: 0.2s;

    @media (max-width: 600px) {
        div {
            flex-direction: column;
        }
    }
`;

const LogoContainer = styled(Container)`
    @media (max-width: 600px) {
        position: absolute;
        width: 100vw;
        height: 100vh;
        bottom: 0px;
        right: 0px;
    }
    z-index: -1;
`;

export default Auth;
