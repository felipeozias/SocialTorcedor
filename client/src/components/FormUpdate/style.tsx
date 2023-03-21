import styled from "styled-components";

export const Form = styled.form`
    height: 100%;
    width: 240px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 1.0rem;
`;

export const BoxInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`;

export const Message = styled.p`
    color: #f3f3f3;
    font-size: 11pt;
`;

export const Link = styled.a`
    color: #f3f3f3;
    text-decoration: none;
    font-weight: bold;
`;


export const DivWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export const ErrorMessage = styled.span`
    color: #ff0000;
    font-size: 9pt;
`;
