import React from "react";
import styled from "styled-components";
import { Colors } from "../App.styles";
import Logo from "../images/Notez.png";

const Auth: React.FC = () => {
    return (
        <>
            <Container>
                <AuthContainer>
                    <h1>
                        Because you totally asked for another note taking app.
                    </h1>
                    <div style={{ display: "flex" }}>
                        <input placeholder='Username' />
                        <input placeholder='Password' />
                        <button>
                            Log in{" "}
                            <i className='material-icons'>arrow_forward</i>
                        </button>
                    </div>
                </AuthContainer>
            </Container>
            <Container>
                <Image src={Logo} />
            </Container>
        </>
    );
};

const Image = styled.img`
    font-size: 20rem;
    font-weight: 800;
    position: absolute;
    right: 0px;
    bottom: 0px;
    line-height: 1;
    color: ${Colors.black};
`;

const AuthContainer = styled.div``;

const Container = styled.div`
    flex: 1;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    input {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid ${Colors.white}b3;

        font-size: 15px;

        margin: 10px 0px;
        padding: 5px 0px;
        margin-right: 20px;
        outline: none;

        transition: 0.2s;

        &:focus {
            border-bottom: 2px solid ${Colors.white};
        }
    }

    button {
        margin-left: auto;

        flex: 0.5;
        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: transparent;
        outline: none;
        border: none;
        color: ${Colors.white}b3;

        cursor: pointer;

        font-size: 15px;

        transition: 0.2s;

        i {
            left: 0px;
            position: relative;

            color: ${Colors.white}b3;

            transition: 0.2s;
        }

        &:hover {
            color: ${Colors.white};

            i {
                left: 5px;
                color: ${Colors.white};
            }
        }
    }
`;

export default Auth;
