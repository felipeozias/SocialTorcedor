import styled from "styled-components";

export const StyledContainer = styled.main`
`;

interface Iprops {
  link: string
}
export const StyledComments = styled.main <Iprops> `
  margin-bottom: 10px;
  display: flex;

  #img{
    background-image: url(${(props) => props.link});
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    min-width: 30px;
  }

  > div{
    background-color:#4D4D4D;
    border-radius: 10px;
    padding: 5px;
    margin-right: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  & span{
    width: 100%;
    font-size: 10.4pt;
    text-align: left;
    
    span{
      font-size: 8pt;
      font-style: italic;
      font-weight: lighter;
    }
  }
  
  & p{
    font-size: 11pt;
    text-align: justify;
  }
`;
