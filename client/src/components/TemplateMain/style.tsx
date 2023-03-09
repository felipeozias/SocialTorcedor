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
    position: fixed;
    top: 110px;
    width: 150px;
    content: url(${(props) => props.image});
`;

export const Title = styled.h1`
    color: #ffffff;
    font-weight: bolder;
    padding: 30px;
    margin-top: 50px;
`;
