import styled from "styled-components";

interface IProps {
    source: string;
}

export const Input = styled.input`
    width: 240px;
    height: 30px;
    padding-left: 10px;
    border: none;
    border-radius: 3px;
    background-color: #f3f3f3;
    font-size: 13pt;
    color: #343232;
`;

export const LabelInput = styled.label`
    font-size: 11pt;
    color: #f3f3f3;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    cursor: pointer;
`;

export const IconVisible = styled.img<IProps>`
    width: 20px;
    position: absolute;
    left: 50%;
    margin-left: 94px;
    margin-top: 5px;
    content: url(${(props) => props.source});
`;

export const BoxInputIcon = styled.div`
    width: 240px;
`;
