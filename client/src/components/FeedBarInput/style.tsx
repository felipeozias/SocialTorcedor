import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    margin: 5px;
`;

export const StyledInput = styled.textarea`
    font-family: Inter, sans-serif;
    color: #FFF;
    padding: 8px;
    margin: 5px 5px 5px 35px;
    width: 100%;
    border-radius: 10px;
    border: none;
    background-color: #e1e1e119;
    resize: none;
    outline: none;
    height: 35px; 
    overflow-y:hidden;
    margin-bottom: 25px;
`;

export const StyledSpanPublic = styled.span`
    font-family: Inter, sans-serif;
    font-size: 11pt;
    color: #FFF;
    font-weight: bold;
    position: absolute;
    right: 15px;
    bottom: 0px;
    cursor: pointer;
`

export const StyledIconsOptions = styled.div`
    position: absolute;
    text-align: left;
    bottom: -5px;
    left: 35px;
    height: 25px;
    width: 50%;
`
