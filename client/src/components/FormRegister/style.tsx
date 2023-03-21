import styled from "styled-components";

export const Form = styled.form`
    height: 100%;
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
`;

export const BoxInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

export const Message = styled.p`
    color: #f3f3f3;
    font-size: 8pt;
`;

export const ErrorMessage = styled.span`
    color: #ff0000;
    font-size: 9pt;
`;

export const ErrorServer = styled.span`
    color: #ff0000;
    font-size: 9pt;
`;
