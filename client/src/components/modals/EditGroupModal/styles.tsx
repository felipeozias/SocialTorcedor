import styled from "styled-components";

export const ModalContainer = styled.form`
z-index: 1001;
height: 45vh;
width: 40.5vw;
font-size: 15px;
position: fixed;
/* left: 10%; */
/* bottom: 30%; */
left: 30%;
bottom: 35%;
border-radius: 10px;
display: flex;
box-shadow: 0.5px 0.5px 5px 2px;
font-family: 'Inter', sans-serif;
background-color: #3D6287;
`
// #343232
// #054a18
export const SectionLeft = styled.section`
    height: 45vh;
    width: 24vw;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 0.5vw;
`
export const SectionRight = styled.section`
    height: 45vh;
    width: 16vw;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const InputName = styled.input`
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
export const UsersContainer = styled.div`
    border: none;
    border-radius: 10px;
    font-size: 1.2vw;
    padding-left: 0.5vw;
    padding-top: 0.5vh;
    padding-right: 0.5vw;
    width: 20vw;
    height: 15vh;
    background-color: #f3f3f3;
    color: #343232;
    overflow: auto;

    ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    /* background: #3D6287; */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5467a0;
    border-radius: 10px;
    border: 3px double #ffffff;
  }
`

export const InputFile = styled.input`
    display: none;
`
export const LabelFile = styled.label`
    font-size: 1.8vw;
    border-radius: 10px;
    background-color: #343232;
    text-align: center;
    width: 12vw;
    align-self: center;
    box-shadow: 0.5px 0.5px 5px 0.5px #f3f3f3;
    :hover {
        cursor: pointer;
        box-shadow: 0.5px 0.5px 5px 3px #f3f3f3;
    }
    :active {
        opacity: 0.7;
    }
    color: #f3f3f3;
`
export const Img = styled.img`
    width: 15vw;
    height: 15vh;
    align-self: center;
    font-size: 1.8vw;
`

export const ButtonAdd = styled.button`
    :hover {
        cursor: pointer;
        border: none;
        box-shadow: 0.5px 0.5px 5px 3px #f3f3f3;
    }
    :active {
        opacity: 0.7;
    }
    border: none;
    border-radius: 10px;
    box-shadow: 0.5px 0.5px 5px 0.5px #f3f3f3;
    background-color: #343232;
    color: #f3f3f3;
    width: 12vw;
    height: 5vh;
    font-size: 1.4vw;
`
export const UsersListContainer = styled.div`
    display: flex;
    width: 10vw;
    justify-content: space-between;
    align-items: center;
`

interface IProps {
    imageUrl: string
}

export const RemoveIcon = styled.div<IProps>`
    background-image: url(${props => props.imageUrl});
    width: 10px;
    height: 10px;
    background-size: contain;
    :hover {
        cursor: pointer;
    }
`