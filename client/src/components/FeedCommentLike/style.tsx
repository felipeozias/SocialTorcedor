import styled from "styled-components";

export const StyledUserContainer = styled.div`
    display: flex;
    text-align: left;
`;

export const StyledContainer = styled.div`
    display: inline-block;
    position: relative;
    align-items: center;
    width: 85%;
    margin: 15px 0;
    background-color: #3D3D3D;
    border-radius: 8px;
    padding: 7px; 
`;

export const StyledCommetPost = styled.p`
    color:#FFF;
    text-align: justify;
    padding: 10px 0;
`;

export const StyledCommentLike = styled.p`
    width: 100%;
    height: 70px;
`;

export const StyledImgPost = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const StyledContainerLikesComment = styled.p`
    border-top: solid 2px #595959;
    border-bottom: solid 2px #595959;
    margin: 10px;
    height: 35px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const StyledNumLikes = styled.p`
    text-align: left;
    margin-left: 10px;
    font-size: 10pt;
    font-style: italic;
`;

export const StyledLikeComment = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    cursor: pointer;
    transition: all .15s;

    & img, span{
        margin: 4px;
    }

    &:hover{
        background-color: #5a5a5a;
        transition: all .15s;
    }
`;

export const StyledComment = styled.div`
    #box_emotion_image{
        background-color: red;
    }
    
    > div {
        width: 100%;
    }
    
    #icon_perfio {
        position: absolute;
        top: 0;
        left: 0;
    }
`;
