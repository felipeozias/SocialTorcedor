import {StyledImg, StyledImgContainer, StyledInput, StyledInputContainer, 
    StyledP, StyledUserSection, UsersContainer} from "./styles";
import img from "../../assets/loupe.png";
import { simulateDb } from "../modals/DataList";
import MainUsers from "../MainUsers";

export default function MainUserSection(): JSX.Element {

    let userValue = ""
    function testApi() {
        console.log(userValue)
    }

    function updateValue() {
        let inputUser = document.querySelector("#input-user") as HTMLInputElement;
        userValue = inputUser.value
        console.log(simulateDb)
    }

    return (
        <StyledUserSection>
            <StyledP> Usuários </StyledP>
            <StyledInputContainer>
                <StyledInput id="input-user" type="text" placeholder='Usuários' onChange={updateValue}/>
                <StyledImgContainer>
                    <StyledImg src={img} alt="loupe image" onClick={testApi}/>
                </StyledImgContainer>
            </StyledInputContainer>
            <UsersContainer>
                <MainUsers name="Lucas Reis"/>
                <MainUsers name="Lucas Reis"/>
                <MainUsers name="Lucas Reis"/>
            </UsersContainer>
        </StyledUserSection>
    )
}