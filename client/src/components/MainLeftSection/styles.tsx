import styled from "styled-components";

export const StyledLeftSection = styled.section`
    /* background-color: green; */
    width: 30%;
    height: 81.9vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    @media (max-width: 700px) {
      display: none;
    }
`