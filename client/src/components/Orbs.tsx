import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "../App.styles";

interface Props {
    top?: string | null;
    bottom?: string | null;
    left?: string | null;
    right?: string | null;
    color?: string;
    delay?: string | undefined;
}

const colors = [Colors.teal, Colors.teal, Colors.orange, Colors.purple];

const OrbRender: React.FC<Props> = ({ color }) => {
    const config = {
        top:
            Math.random() > 0.5
                ? `${Math.round(Math.random() * 1.2)}00px`
                : null,
        bottom:
            Math.random() > 0.5
                ? `${Math.round(Math.random() * 1.2)}00px`
                : null,
        left:
            Math.random() > 0.5
                ? `${Math.round(Math.random() * 1.2)}00px`
                : null,
        right:
            Math.random() > 0.5
                ? `${Math.round(Math.random() * 1.2)}00px`
                : null,
        delay: `${Math.ceil(Math.random() * 100)}s`,
    };

    const orbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (orbRef.current) {
            orbRef.current.style.opacity = "0.3";
        }
    }, []);

    return (
        <div>
            <Orb
                ref={orbRef}
                color={color}
                top={config.top}
                bottom={config.bottom}
                left={config.left}
                right={config.right}
                delay={config.delay}
            />
        </div>
    );
};

const Orbs = () => {
    const orbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (orbRef.current) {
            orbRef.current.style.opacity = "0.3";
        }
    }, []);
    return (
        <>
            {colors.map(color => (
                <OrbRender color={color} />
            ))}
            <Orb ref={orbRef} color={Colors.teal} bottom='0px' right='0px' />
        </>
    );
};

const transform = keyframes`
    0% {
        transform: translate(0px, 0px), scale(1);
    }
    25% {
        transform: translate(150px, 30px), scale(1.2);
    }
    50% {
        transform: translate(-30px, -40px), scale(0.8);
    }
    75% {
        transform: translate(25px, 10px), scale(0.6);
    }
    100% {
        transform: translate(0px, 10px), scale(1);
    }
`;

const Orb = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 500px;

    background-color: ${(props: Props) => props.color};

    position: absolute;
    top: ${(props: Props) => props.top};
    left: ${(props: Props) => props.left};
    right: ${(props: Props) => props.right};
    bottom: ${(props: Props) => props.bottom};

    box-shadow: ${(props: Props) => `0 0 2000px 20px ${props.color}`};

    opacity: 0;

    filter: blur(150px);

    animation: 20s ${transform} infinite alternate;
    animation-delay: ${(props: Props) => props.delay};

    z-index: -2;

    transition: 1s;
`;

export default Orbs;
