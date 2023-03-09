import styled from "styled-components";

export const StyledFooter = styled.footer`
    z-index: 100;
    background-color: #1a2a3a;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 60px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 7% 0px 7%;
    font-size: 12pt;
`;

export const ContainerIcons = styled.div`
    display: flex;
    gap: 1.5rem;
`;

export const Icons = styled.img`
    width: 35px;
`;
