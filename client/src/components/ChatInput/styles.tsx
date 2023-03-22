import styled from "styled-components";

export const StyledChatContainer = styled.div`
    width: 100%;
    padding-bottom: 5px;

    * {
        color: #000;
    }

    textarea {
        margin: 5px 0 12px 0;
        background-color: #c6c6c6;
        /* margin: 10px; */
        max-height: 115px;
        overflow-y: auto;
    }

    > div {
        margin: 0;
        padding-bottom: 10px;

        > div {
            margin-top: 10px;
            left: 0;
            margin-left: 0;
            img {
                background-color: #000;
                border-radius: 50%;
                /* background-image: url(Icon); */
            }
        }
    }
`;

export const BoxInput = styled.div`
    display: flex;
    height: 35px;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 7px;
    background-color: #c4c4c4;
    color: #000000;
    margin: 0;
`;

export const InputBox = styled.input`
    font-family: Inter, sans-serif;
    color: #3a3a3a;
    width: 78%;
    border-radius: 10px;
    border: none;
    background-color: #e1e1e119;
    background-color: rgba(0 0 0 0);
    resize: none;
    outline: none;
    height: 35px;
    overflow-y: hidden;
    margin-top: 7px;
    padding-left: 7px;
`;

export const ButtonChat = styled.button`
    width: 20%;
    margin-top: 8px;
    border: none;
    border-radius: 7px;
    background-color: #c4c4c4;
    color: #3a3a3a;
    font-size: 11pt;
    font-weight: bold;
    cursor: pointer;
`;
