import styled from "styled-components";

interface IProps {
    textSize: number;
}

export const Container = styled.div`
    background-color: #657687;
    width: 21vw;
    height: 6.5vh;
    border-radius: 8px;
    display: flex;
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 5px;
`

export const ImgContainer = styled.div`
    width: 18%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    width: 70%;
    height: 90%;
    background-color: #fff;
    border-radius: 5px;
`
export const Pcontainer = styled.div`
    width: 64%;
    height: 100%;
`
export const P = styled.p<IProps>`
    /* width: 64%; */
    /* height: 70%; */
    font-size: ${props => props.textSize}px;
    display: flex;
    align-items: center;
`
export const P2 = styled.p`
    /* width: 64%; */
    /* height: 30%; */
    font-size: 11.5px;
`
export const ImgContainer2 = styled.div`
    width: 18%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`

export const ChatIcon = styled.img`
    width: 50%;
    height: 75%;
    background-color: #FFF;
    border-radius: 5px;
    padding: 0.15vw;
    :hover {
        cursor: pointer;
    }
    margin-right: 10px;
`