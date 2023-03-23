import styled from "styled-components";

interface IProps {
    src: string;
}

export const Container = styled.div`
    background-color: #657687;
    width: 21vw;
    height: 40px;
    border-radius: 5px;
    display: flex;
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 5px;
`;

export const ImgContainer = styled.div<IProps>`
    background-image: url(${(props) => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    margin: 2.9px 10px 0px 10px;
    /* width: 18%;
    height: 100%; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
`;

export const Img = styled.img`
    width: 70%;
    height: 90%;
    background-color: #fff;
    border-radius: 5px;
`;

export const P = styled.p`
    width: 64%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const ImgContainer2 = styled.div`
    width: 18%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const ChatIcon = styled.img`
    width: 50%;
    height: 75%;
    background-color: #fff;
    border-radius: 5px;
    padding: 0.15vw;
    :hover {
        cursor: pointer;
    }
`;
export const Span = styled.span`
    font-size: 8.5pt;
    font-style: italic;
`;
