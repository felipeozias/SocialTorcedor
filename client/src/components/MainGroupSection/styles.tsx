import styled from "styled-components"

export const StyledGroupSection = styled.section`
    background-color: #3D6287;
    width: 85%;
    height: 35vh;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: #3D6287;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5467a0;
    border-radius: 10px;
    border: 3px double #ffffff;
  }
`
export const StyledP = styled.p`
    color: #BBFD00;
    font-size: 2vw;
    font-weight: 700;
    padding: 10px;
`
export const StyledTitleSection = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  /* background-color: red; */
`

export const StyledImg = styled.img`
  :hover {
    cursor: pointer;
  }
`
export const ImgContainer = styled.div`
  /* background-color: blue; */
  width: 35%;
  display: flex;
  justify-content: center;
`