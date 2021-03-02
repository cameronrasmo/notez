import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ctx/AuthProvider";
import { AuthTypes, AuthStatus } from "../../interfaces/IAuth";
import loadingGif from "../../images/ZZ5H.gif";

const AuthButton: React.FC<{
    authType: string;
    formState: { username: string; password: string };
}> = ({ authType, formState: { username, password } }) => {
    const { signIn, authStatus, setAuthStatus } = useContext(AuthContext);
    const [text, setText] = useState<string | null>(null);

    const handleSubmit = (): void => {
        username !== "" && password !== ""
            ? signIn && signIn(username, password)
            : setAuthStatus &&
              setAuthStatus({
                  type: AuthStatus.FAILED,
                  errMsg: "Fields Required",
              });
    };

    useEffect(() => {
        switch (authStatus?.type) {
            case AuthStatus.READY:
                setText(authType === AuthTypes.LOGIN ? "Log in" : "Sign up");
                break;
            case AuthStatus.LOADING:
                setText(
                    authType === AuthTypes.LOGIN ? "Logging in" : "Signing up"
                );
                break;
            case AuthStatus.FAILED:
                setText(authStatus.errMsg);
                break;
        }
    }, [authType, authStatus]);

    return (
        <button onClick={handleSubmit}>
            <p>{text}</p>
            {authStatus?.type !== AuthStatus.LOADING ? (
                <i className='material-icons'>{authStatus?.type}</i>
            ) : (
                <img src={loadingGif} alt='loading' width={20} />
            )}
        </button>
    );
};

export default AuthButton;
