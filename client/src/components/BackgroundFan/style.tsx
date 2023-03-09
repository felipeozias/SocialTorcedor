import styled from "styled-components";

interface IBackground {
    background: string;
}

export const BoxBackground = styled.div<IBackground>`
    width: 70vw;
    height: 100vh;
    position: fixed;
    left: 0;
    background-image: url(${(props) => props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
