import styled from "styled-components";

export const StyledMain = styled.main`
    position:absolute;
    scroll-behavior: smooth;
    margin: 50px 0 0;
    scroll-behavior: auto;
    left: 0;
    width: 100%;
    height: 81.9vh;
    color: #ffffff;
    display: flex;
    flex-wrap: wrap;
`
export const StyledMainSection = styled.section`
    display: flexbox;
    text-align: center;
    width: 40%;
    min-height: calc(100vh - 110px);
    padding-bottom: 80px;
`
export const StyledRigthSection = styled.section`
    background-color: #0000ff16;
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    width: 30%;
    margin: 50px 0 150px 0;
    height: 100vh;
`;
