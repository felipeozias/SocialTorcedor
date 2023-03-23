import styled from "styled-components";

interface IProps {
    textSize?: number;
    src?: string;
}
interface BProps {
    border: string;
}
interface DProps {
    display: string;
}
interface PProps {
    position: number;
}
export const Container = styled.div<BProps>`
    background-color: #657687;
    width: 21vw;
    height: 45px;
    border-radius: 5px;
    display: flex;
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 5px;
    border: ${(props) => props.border} 4px #0000ff;
    align-items: center;
    justify-content: center;
`;

export const ImgContainer = styled.div<IProps>`
    background-image: url(${(props) => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 2px 7px 0px 7px;
`;

export const Img = styled.img`
    width: 70%;
    height: 90%;
    background-color: #fff;
    border-radius: 5px;
`;
export const Pcontainer = styled.div`
    padding-top: 2px;
    width: 64%;
    height: 100%;
    :hover {
        cursor: pointer;
    }
`;
export const P = styled.p<IProps>`
    font-size: ${(props) => props.textSize}px;
    display: flex;
    align-items: center;
`;
export const P2 = styled.p`
    font-size: 11.5px;
`;
export const ImgContainer2 = styled.div`
    width: 18%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    gap: 0.3rem;
    margin-left: 5px;
`;

export const EditIcon = styled.img<DProps>`
    width: 20px;
    :hover {
        cursor: pointer;
    }
    display: ${(props) => props.display};
`;
export const DeleteIcon = styled.img<DProps>`
    width: 20px;
    :hover {
        cursor: pointer;
    }
    display: ${(props) => props.display};
`;

export const ExitIcon = styled.img<DProps>`
    width: 18px;
    :hover {
        cursor: pointer;
    }
    margin-left: 25px;
    display: ${(props) => props.display};
`;

export const Popup = styled.div<PProps>`
    z-index: 1005;
    width: 90px;
    height: 40px;
    background-color: white;
    color: black;
    border-radius: 100px;
    position: absolute;
    text-align: center;
    font-weight: 700;
    border: solid 1px red;
    margin-bottom: ${(props) => props.position}px;
    margin-right: 10px;
`;
export const Popup2 = styled.div<PProps>`
    z-index: 1005;
    width: 90px;
    height: 40px;
    background-color: white;
    color: black;
    border-radius: 100px;
    position: absolute;
    text-align: center;
    font-weight: 700;
    border: solid 1px red;
    margin-bottom: ${(props) => props.position}px;
    margin-right: 40px;
`;
export const Popup3 = styled.div<PProps>`
    z-index: 1005;
    width: 90px;
    height: 40px;
    background-color: white;
    color: black;
    border-radius: 100px;
    position: absolute;
    text-align: center;
    font-weight: 700;
    border: solid 1px red;
    margin-bottom: ${(props) => props.position}px;
    margin-left: 30px;
`;
