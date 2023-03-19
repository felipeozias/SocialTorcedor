import styled from "styled-components";

export const StyledChatContainer = styled.div`
    width: 100%;
    padding-bottom: 5px;
    
    *{
        color: #000;
    }
    
    textarea{
        margin: 5px 0 12px 0;
        background-color: #C6C6C6;
        /* margin: 10px; */
        max-height: 115px;
        overflow-y: auto;
    }

    >div{
        margin: 0;
        padding-bottom: 10px;

        >div{
            margin-top: 10px;
            left: 0;
            margin-left: 0;
            img{
                background-color: #000;
                border-radius: 50%;
                /* background-image: url(Icon); */
            }
        }
    }
`;
