import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    margin: 5px;

    & button{
        display: flex;
        /* position: relative; */
        background-color: #3D3D3D;
        box-shadow: none;
        border: none;
        color: #fff;
    }

    label{
        display: flex;
        width: 25px;
        height: 25px;
        position: relative;
        cursor: pointer;
    }

    input{
        display: none;
    } 

    #imgForInputPublication{
        position: absolute;
        left: 65px;
        bottom: 0;
        font-size: 8pt;
        font-style: italic;
    }
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

export const StyledSpanPublic = styled.button`
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
