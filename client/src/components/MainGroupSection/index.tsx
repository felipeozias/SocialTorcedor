import { StyledGroupSection, StyledImg, StyledP, StyledTitleSection, ImgContainer } from "./styles"
import MainGroups from "../MainGroups"
import addGroupIcon from "../../assets/group-add.png"

export default function MainGroupSection() {
    return (
        <StyledGroupSection>
            <StyledTitleSection>
                <StyledP> Grupos </StyledP>
                <ImgContainer>
                    <StyledImg src={addGroupIcon}/>
                </ImgContainer>
            </StyledTitleSection>
            <MainGroups name="Rodrigo alves" groupName="Os fodas"/>
            <MainGroups name="Edvania" groupName="Os fodas do Br"/>
            <MainGroups name="Alandis" groupName="Os fodas"/>
            <MainGroups name="Rodrigo alves" groupName="Os fodas"/>
            <MainGroups name="Edvania" groupName="Os fodas do Br"/>
        </StyledGroupSection>
    )
}