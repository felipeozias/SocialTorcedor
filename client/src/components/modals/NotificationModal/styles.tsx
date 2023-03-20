import styled from "styled-components";

interface IProps {
    leftPosition: number
    bottomPosition: number
}

export const StyledModal = styled.div<IProps>`
    z-index: 1005;
    font-size: 16px;
    position: absolute;
    left: ${props => props.leftPosition}vw;
    bottom: ${props => props.bottomPosition}vh;
    border-radius: 10px;
    display: flex;
    box-shadow: 0.5px 0.5px 0.5px 0.5px;
    font-family: 'Inter', sans-serif;
    background-color: #f3f3f3;
    color: #1a2a3a;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5%;
`