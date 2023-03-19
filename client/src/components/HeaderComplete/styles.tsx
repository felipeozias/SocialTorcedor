import styled from "styled-components";

export const StyledHeader = styled.header`
    z-index: 100;
    background-color: #1A2A3A;
    position:fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 50px;
    color: #FFF;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 700px) {
        h1{
            display: none;
        }
    }
`
