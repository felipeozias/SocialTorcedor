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
    @media (max-width: 780px) {
        justify-content: center;
    }
    @media (max-width: 780px) and (max-height: 640px) {
        display: "none";
    }
`;

export const MessageFooter = styled.p`
    font-size: 12pt;
    @media (max-width: 1000px) {
        font-size: 9pt;
    }

    @media (max-width: 780px) {
        display: none;
    }
`;

export const ContainerIcons = styled.div`
    display: flex;
    gap: 1.5rem;
`;

export const Icons = styled.img`
    width: 35px;

    @media (max-width: 1000px) {
        width: 25px;
    }
`;
