import styled from "styled-components";

export default function Header() {
    const StyledHeader = styled.header`
    z-index: 100;
    background-color: #1A2A3A;
    position:fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 50px;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    `

    return (
        <StyledHeader>
            <h1>Social Torcedor</h1>
        </StyledHeader>
    )
}