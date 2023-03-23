import styled from "styled-components";

export const StyledUserSection = styled.section`
    background-color: #3d6287;
    width: 85%;
    height: 35vh;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const StyledP = styled.p`
    color: #bbfd00;
    /* font-size: 2vw; */
    font-size: clamp(18px, 2vw, 30px);
    font-weight: 700;
    /* background-color: red; */
    padding: 10px;
`;
export const StyledInputContainer = styled.div`
    background-color: #eaeaea;
    width: 21vw;
    height: 35px;
    border-radius: 5px;
    display: flex;
`;
export const StyledInput = styled.input`
    background-color: #fff;
    width: 17vw;
    height: 35px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border: none;
    font-size: clamp(12px, 1.5vw, 25px);
    padding-left: 0.5vw;
    border-radius: 5px;
    :focus {
        outline: none;
    }
`;
export const StyledImgContainer = styled.div`
    display: flex;
    height: 35px;
    width: 4vw;
    justify-content: center;
    align-items: center;
`;
export const StyledImg = styled.img`
    width: cover;
    height: 80%;
    color: #000;
    padding: 0.15vw;
    :hover {
        cursor: pointer;
    }
`;
export const UsersContainer = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    margin-left: 1.3vw;
    margin-top: 5px;
    margin-bottom: 7px;
    ::-webkit-scrollbar {
        width: 15px;
    }

    ::-webkit-scrollbar-track {
        background: #3d6287;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #5467a0;
        border-radius: 10px;
        border: 3px double #ffffff;
    }
`;
