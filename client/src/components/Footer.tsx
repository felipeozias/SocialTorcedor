import styled from "styled-components";

export default function Footer() {
    const StyledFooter = styled.footer`
    z-index: 100;
    background-color: #1A2A3A;
    position:fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 50px;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    `
    return (
        <StyledFooter>
            <p>© 2023 por Social Torcedores. Orgulhosamente criado pela equipe Devs Torcedores</p>
        </StyledFooter>
    )
}