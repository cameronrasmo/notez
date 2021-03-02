import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ctx/AuthProvider";
import { AuthTypes, AuthStatus } from "../../interfaces/IAuth";
import Img from "../../images/ZZ5H.gif";

const AuthButton: React.FC<{
    authType: string;
    formState: { username: string; password: string };
}> = ({ authType, formState: { username, password } }) => {
    const { signIn, authStatus } = useContext(AuthContext);
    const [text, setText] = useState<string | null>(null);

    useEffect(() => {
        switch (authStatus) {
            case AuthStatus.READY:
                setText(authType === AuthTypes.LOGIN ? "Log in" : "Sign up");
                break;
            case AuthStatus.LOADING:
                setText(
                    authType === AuthTypes.LOGIN ? "Logging in" : "Signing up"
                );
                break;
            case AuthStatus.FAILED:
                setText("Error");
                break;
        }
    }, [authType, authStatus]);

    return (
        <button onClick={() => signIn && signIn(username, password)}>
            <p>{text}</p>
            {authStatus !== AuthStatus.LOADING ? (
                <i className='material-icons'>
                    {authStatus === AuthStatus.FAILED
                        ? "clear"
                        : "arrow_forward"}
                </i>
            ) : (
                <img src={Img} alt='loading' width={20} />
            )}
        </button>
    );
};

export default AuthButton;
