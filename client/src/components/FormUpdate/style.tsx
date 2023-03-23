import styled from "styled-components";

interface IProps {
    path: string;
}

export const Form = styled.form`
    height: 100%;
    width: 240px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
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

export const DivImage = styled.div<IProps>`
    background-image: url(${(props) => props.path});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 90px;
    width: 75px;
    margin-bottom: 5px;
    //border-radius: 10px;
`;
