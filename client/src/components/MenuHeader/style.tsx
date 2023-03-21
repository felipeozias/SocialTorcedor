import styled from "styled-components";

export const MenuHeaderUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 60px;
    background-color: #1a2a3a;
    width: 160px;
    gap: 0.3rem;
    padding: 7px 10px 7px 10px;
`;

export const TextList = styled.p`
    color: #f3f3f3;
    font-size: 11pt;
    font-weight: 200;
    text-decoration: none;
    &:hover {
        font-weight: bold;
    }
`;
