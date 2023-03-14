import { StyledGroupSection, StyledImg, StyledP, StyledTitleSection, ImgContainer } from "./styles"
import MainGroups from "../MainGroups"
import addGroupIcon from "../../assets/group-add.png"
import { simulateDbGroups } from "../../database"
import GroupModal from "../../components/modals/GroupModal";
import useModal from "../../hooks/useModal";

export default function MainGroupSection() {
    const { isOpen, toggle } = useModal();
    
    function addGroup() {
        console.log("Criar grupo!")
        toggle();
    }

    return (
        <StyledGroupSection>
            <GroupModal isOpen={isOpen} toggle={toggle} />
            <StyledTitleSection>
                <StyledP> Grupos </StyledP>
                <ImgContainer>
                    <StyledImg onClick={addGroup} src={addGroupIcon}/>
                </ImgContainer>
            </StyledTitleSection>
            {(simulateDbGroups.map((groups) => (
                    <MainGroups
                        key={groups._id} 
                        owner={groups.owner}
                        groupName={groups.name}
                        textSize={groups.name.length <= 16 ? 18 : 15}
                    />
            )))}
            {/* <button onClick={toggle}> Open Modal</button> */}
        </StyledGroupSection>
    )
}