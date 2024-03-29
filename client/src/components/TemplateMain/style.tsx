import styled from "styled-components";

interface IProps {
    image?: string;
    small?: boolean;
}

export const Template = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30vw;
    height: 100vh;
    background-color: #1a2a3a;
    position: fixed;
    right: 0;
    gap: 0.2rem;
    @media (max-width: 1000px) {
        width: 40vw;
    }
    @media (max-width: 780px) {
        width: 100vw;
    }
`;

export const Logo = styled.img<IProps>`
    height: ${(props) => (props.small ? "10vh" : "15vh")};
    content: url(${(props) => props.image});
`;

export const NameLogo = styled.h1<IProps>`
    color: #fff;
    font-size: ${(props) => (props.small ? "4vh" : "5vh")};
    font-family: "Lobster", cursive;
    @media (max-width: 480px) {
        display: ${(props) => (props.small ? "none" : "block")};
    }
`;

export const BoxLogo = styled.div`
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 3vh;
    @media (max-width: 1000px) {
        width: 40vw;
    }
    @media (max-width: 780px) {
        width: 100vw;
    }
`;

export const BoxChild = styled.div`
    margin-top: 20%;
`;
