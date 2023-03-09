import styled from "styled-components";

interface IProps {
    image: string;
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
    gap: 0.5rem;
`;

export const Logo = styled.img<IProps>`
    width: 150px;
    content: url(${(props) => props.image});
`;

export const NameLogo = styled.h1`
    color: #fff;
    font-family: "Lobster", cursive;
`;

export const BoxLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 10%;
`;

export const BoxChild = styled.div`
    margin-top: 20%;
`;
