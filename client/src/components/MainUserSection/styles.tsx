import styled from "styled-components";

export const StyledUserSection = styled.section`
    background-color: #3D6287;
    width: 85%;
    height: 35vh;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const StyledP = styled.p`
    color: #BBFD00;
    font-size: 2vw;
    font-weight: 700;
    /* background-color: red; */
    padding: 10px;
`
export const StyledInputContainer = styled.div`
    background-color: #EAEAEA;
    width: 21vw;
    height: 5vh;
    border-radius: 15px;
    display: flex;
`
export const StyledInput = styled.input`
    background-color: #FFF;
    width: 17vw;
    height: 5vh;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border: none;
    font-size: 1.5vw;
    padding-left: 0.5vw;
    :focus {
        outline: none;
    }
`
export const StyledImgContainer = styled.div`
    display: flex;
    height: 5vh;
    width: 4vw;
    justify-content: center;
`
export const StyledImg = styled.img`
    width: cover;
    height: 100%;
    color: #000;
    padding: 0.15vw;
    :hover {
        cursor: pointer;
    }
`
