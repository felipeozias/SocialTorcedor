import styled from "styled-components";

interface IColor {
    color: string
}

export const StyledContainer = styled.div<IColor>`
    background-color: ${props => props.color};
    text-align: center;
    padding: 5px 10px;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    position: fixed;
    z-index: 101;
    opacity: 0;
    animation: fade-in 0.5s ease-out forwards;

    @keyframes fade-in {
        from {
            opacity: 0;    
        }
        to {
            opacity: .8;
        }
    }
`;

