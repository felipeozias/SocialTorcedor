import styled from "styled-components";

interface IProps {
    src: string;
}

export const StyledImg = styled.div<IProps>`
    height: 35px;
    width: 35px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${(props) => props.src});
    border-radius: 50%;
`;

/* export const StyledImg = styled.img`
    height: 35px;

   
`; */
