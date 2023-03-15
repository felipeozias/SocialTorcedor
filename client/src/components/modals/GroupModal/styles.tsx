import styled from "styled-components";

export const StyledModal = styled.form`
z-index: 1001;
height: 45vh;
width: 40.5vw;
font-size: 15px;
position: fixed;
left: 10%;
bottom: 30%;
border-radius: 10px;
display: flex;
box-shadow: 0.5px 0.5px 0.5px 0.5px;
font-family: 'Inter', sans-serif;
background-color: #054a18;
`
// #343232
// #054a18
export const StyledSectionLeft = styled.section`
    height: 45vh;
    width: 24vw;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 0.5vw;
`
export const StyledSectionRight = styled.section`
    height: 45vh;
    width: 16vw;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const StyledInputName = styled.input`
    border-radius: 10px;
    border: none;
    width: 15vw;
    height: 5vh;
    font-size: 1.5vw;
    padding-left: 0.5vw;
    :focus {
        border: none;
        outline: 0;
    }
    background-color: #f3f3f3;
    color: #343232;
`
export const StyledTextArea = styled.textarea`
    :focus {
        border: none;
        outline: 0;
    }
    border: none;
    border-radius: 10px;
    font-size: 1.2vw;
    padding-left: 0.5vw;
    padding-top: 0.5vh;
    padding-right: 0.5vw;
    resize: none;
    width: 20vw;
    background-color: #f3f3f3;
    color: #343232;
`

export const StyledInputFile = styled.input`
    display: none;
`
export const StyledLabelFile = styled.label`
    font-size: 1.8vw;
    border-radius: 10px;
    background-color: #343232;
    text-align: center;
    width: 12vw;
    align-self: center;
    box-shadow: 0.5px 0.5px 0.5px 0.5px #f3f3f3;
    :hover {
        cursor: pointer;
        box-shadow: 0.5px 0.5px 1px 1px #f3f3f3;
    }
    :active {
        opacity: 0.7;
    }
    color: #f3f3f3;
`
export const StyledImg = styled.img`
    width: 15vw;
    height: 15vh;
    align-self: center;
    font-size: 1.8vw;
`

export const StyledButton = styled.button`
    :hover {
        cursor: pointer;
        border: none;
        box-shadow: 0.5px 0.5px 1px 1px #f3f3f3;
    }
    :active {
        opacity: 0.7;
    }
    border: none;
    border-radius: 10px;
    box-shadow: 0.5px 0.5px 0.5px 0.5px #f3f3f3;
    background-color: #343232;
    color: #f3f3f3;
    margin-top: 1.4vh;
    height: 5vh;
    font-size: 1.4vw;
`
export const StyledButton2 = styled.button`
    :hover {
        cursor: pointer;
        border: none;
        box-shadow: 0.5px 0.5px 1px 1px #f3f3f3;
    }
    :active {
        opacity: 0.7;
    }
    border: none;
    border-radius: 10px;
    box-shadow: 0.5px 0.5px 0.5px 0.5px #f3f3f3;
    background-color: #343232;
    color: #f3f3f3;
    width: 12vw;
    height: 5vh;
    font-size: 1.4vw;
`