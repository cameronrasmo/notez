import React, { useContext, useState } from "react";
import { Image, Container, AuthContainer, LogoContainer } from "./authStyles";
import { FlexRow } from "../reusableStyles";
import LogoLight from "../../images/logoLight.png";
import LogoDark from "../../images/logoDark.png";
import { SystemContext } from "../../ctx/SystemProvider";
import { AuthContext } from "../../ctx/AuthProvider";
import AuthButton from "./AuthButton";
import { AuthTypes, AuthStatus } from "../../interfaces/IAuth";

interface IFormState {
    username: string;
    password: string;
}

const Auth: React.FC = () => {
    const { theme } = useContext(SystemContext);
    const { authStatus, setAuthStatus } = useContext(AuthContext);
    const [authType, setAuthType] = useState<string | null>(null);
    const [formState, setFormState] = useState<IFormState>({
        username: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        if (formState.username.length > 0 && formState.password.length > 0) {
            setAuthStatus &&
                setAuthStatus({ type: AuthStatus.READY, errMsg: null });
        }
        setFormState(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const setAuth = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        const { name } = e.target as HTMLButtonElement;
        setAuthType(name);
    };

    return (
        <>
            <Container>
                <AuthContainer
                    theme={theme}
                    authType={authType}
                    authStatus={authStatus}>
                    {authType ? (
                        <>
                            <h1>
                                {authType === "login"
                                    ? "Welcome back friend."
                                    : "Welcome to THE definitive note taking experience."}
                            </h1>
                            <FlexRow>
                                <input
                                    name='username'
                                    type='text'
                                    placeholder={
                                        authStatus?.errMsg === "Fields Required"
                                            ? "Required"
                                            : "Username"
                                    }
                                    value={formState.username}
                                    onChange={handleChange}
                                />
                                <input
                                    name='password'
                                    type='password'
                                    placeholder={
                                        authStatus?.errMsg === "Fields Required"
                                            ? "Required"
                                            : "Password"
                                    }
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                            </FlexRow>
                            <FlexRow
                                style={{
                                    minHeight: "30px",
                                }}>
                                <AuthButton
                                    authType={authType}
                                    formState={formState}
                                />
                            </FlexRow>
                        </>
                    ) : (
                        <div style={{ width: "100%" }}>
                            <h1 style={{ animationDelay: "0.3s" }}>
                                Because you totally asked for another note
                                taking app.
                            </h1>
                            <FlexRow style={{ marginTop: "5px" }}>
                                <button
                                    name={AuthTypes.LOGIN}
                                    onClick={setAuth}>
                                    Log in
                                </button>
                                <button
                                    name={AuthTypes.SIGNUP}
                                    onClick={setAuth}>
                                    Sign up
                                </button>
                            </FlexRow>
                        </div>
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
