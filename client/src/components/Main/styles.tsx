import styled from "styled-components";

export const StyledMain = styled.main`
    position: absolute;
    scroll-behavior: smooth;
    margin: 50px 0 0;
    scroll-behavior: auto;
    left: 0;
    width: 100%;
    height: 81.9vh;
    color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: hidden;
`;
export const StyledMainSection = styled.section`
    display: flexbox;
    text-align: center;
    width: 40%;
    height: 99%;
    overflow: auto;
    margin-top: 10px;

    @media (max-width: 700px) {
        width: 100vw;
    }

    ::-webkit-scrollbar {
        width: 15px;
    }

    ::-webkit-scrollbar-track {
        background: #657687;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #5467a0;
        border-radius: 10px;
        border: 3px double #ffffff;
    }
`;
export const StyledRigthSection = styled.section`
    position: fixed;
    top: 0;
    right: 0;
    width: 30%;
    margin: 50px 0 150px 0;
    padding: 20px;
    height: 100vh;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const BoxMessageChat = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 30px;
    margin-top: -20px;

    color: #5a5a5a;
    text-align: center;
`;

export const NicknameSpan = styled.span`
    font-size: 9pt;
    font-style: italic;
`;
