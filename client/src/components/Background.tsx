import React from "react";
import styled, { keyframes } from "styled-components";
import BG from "../images/alphaBG.png";

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='background'>
            {children}
            <Image src={BG} alt='background' />
        </div>
    );
};

const introAnimation = keyframes`
    0% {
        width: 0%;
        opacity: 0;
    }
    100% {
        width: 100%;
        opacity: 1;
    }
`;

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0;

    object-fit: cover;

    animation: 2s ${introAnimation} forwards;
    animation-delay: 0.8s;
    animation-timing-function: cubic-bezier(1, 0, 0.3, 1);
`;

export default Background;
