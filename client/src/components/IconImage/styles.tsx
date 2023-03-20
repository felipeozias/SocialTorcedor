import styled from "styled-components";

interface IFile {
    image: string
}

export const StyledDiv = styled.div<IFile>`
    background-image: url(${(props) => props.image});
    background-size: cover;
    width: 22px;
    height: 22px;
    cursor: pointer;
    display: block;
`;
