import styled from "styled-components";

export const Form = styled.form`
    height: 100%;
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.8rem;
`;

export const BoxInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;

export const Message = styled.p`
    color: #f3f3f3;
    font-size: 8pt;
`;

export const ErrorMessage = styled.span`
    color: #ff0000;
    font-size: 10pt;
`;

export const NoAuthMessage = styled.span`
    color: #ff0000;
    font-size: 12pt;
    margin-top: -30px;
`;


