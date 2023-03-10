import {StyledImg, StyledImgContainer, StyledInput, StyledInputContainer, StyledP, StyledUserSection} from "./styles";
import img from "../../assets/loupe.png";

export default function MainUserSection(): JSX.Element {

    function testApi() {
        console.log("Clicado!")
        fetch("http://34.30.23.91:8000/")
        .then((res) => res.json()).then((data) => console.log(data))
    }

    return (
        <StyledUserSection>
            <StyledP> Usuários </StyledP>
            <StyledInputContainer>
                <StyledInput type="text" placeholder='Usuários'/>
                <StyledImgContainer>
                    <StyledImg src={img} alt="loupe image"/>
                </StyledImgContainer>
            </StyledInputContainer>
            <button onClick={testApi}>Teste</button>
        </StyledUserSection>
    )
}