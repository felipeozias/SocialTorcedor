import styled from "styled-components";

interface IProps {
    index: number
}

export const StyledModalOverlay = styled.div<IProps>`
    z-index: ${props => props.index};
    width: 171%;
    height: 100%;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`