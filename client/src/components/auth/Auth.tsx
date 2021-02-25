import React, { useContext, useState, useEffect } from "react";
import { Image, Container, AuthContainer, LogoContainer } from "./authStyles";
import LogoLight from "../../images/logoLight.png";
import LogoDark from "../../images/logoDark.png";
import { SystemContext } from "../../ctx/SystemProvider";

interface IFormState {
    username: string;
    password: string;
}

enum authTypes {
    SIGNUP = "signup",
    LOGIN = "login",
}

const Auth: React.FC = () => {
    const { theme } = useContext(SystemContext);
    const [authType, setAuthType] = useState<string | null>(null);
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
                    {authType ? (
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
                                {authType === "signup" ? "Sign up" : "Log in"}{" "}
                                <i className='material-icons'>arrow_forward</i>
                            </button>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </AuthContainer>
            </Container>
            <LogoContainer>
                <Image src={theme === "light" ? LogoLight : LogoDark} />
            </LogoContainer>
        </>
    );
};

export default Auth;
