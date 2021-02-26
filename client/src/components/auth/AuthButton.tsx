import { useState } from "react";
import { AuthTypes, AuthStatus } from "../../interfaces/IAuth";
import Img from "../../images/ZZ5H.gif";

const AuthButton: React.FC<{ authType: string }> = ({ authType }) => {
    const [authStatus, setAuthStatus] = useState<AuthStatus>();

    return (
        <button onClick={() => setAuthStatus(AuthStatus.LOADING)}>
            {authStatus !== AuthStatus.LOADING ? (
                <i className='material-icons'>
                    {authStatus === AuthStatus.FAILED
                        ? "clear"
                        : "arrow_forward"}
                </i>
            ) : (
                <img src={authStatus} alt='loading' width={20} />
            )}
        </button>
    );
};

export default AuthButton;
