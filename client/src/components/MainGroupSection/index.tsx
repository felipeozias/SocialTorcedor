import { StyledGroupSection, StyledImg, StyledP, StyledTitleSection, ImgContainer } from "./styles"
import MainGroups from "../MainGroups"
import addGroupIcon from "../../assets/group-add.png"
import { IGroup, simulateDbGroups, simulateLogin } from "../../database"
import GroupModal from "../../components/modals/GroupModal";
import useModal from "../../hooks/useModal";
import { useState, useEffect } from "react";
import Context from "../../hooks/useContext";

export default function MainGroupSection() {
    const { isOpen, toggle } = useModal();
    let [positionPopUp, setPositionPopUp] = useState(80);

    function addGroup() {
        console.log("Criar grupo!")
        toggle();
    }
    
    let groups = simulateDbGroups;
    let filteredGroupsOwner = simulateDbGroups.filter(users => users.owner.includes(simulateLogin.name))
    // console.log(filteredGroupsOwner)
    let filteredGroupsIn = simulateDbGroups.map(groups => groups.users.filter(users => users.user.includes(simulateLogin.name)));
    // console.log(filteredGroupsIn)
    let positionArray: Array<number> = [];
    let c = 0;
    filteredGroupsIn.forEach(el => {
        if (el.length > 0) {
            positionArray.push(c)
        }
        c ++
    });
    // console.log(positionArray);
    let groupsIn: IGroup[] = [];
    positionArray.forEach(el => {
        groupsIn.push(groups[el])
    })
    // console.log(groupsIn);
    
    useEffect(() => {
        // const groupObj = document.querySelector("#groupSection") as HTMLElement
        // console.log(groupObj)
        // console.log(groupObj.scrollLeft, groupObj.scrollTop)
        // groupObj.addEventListener("click", () => {
        //     console.log(groupObj.scrollLeft, groupObj.scrollTop)
        // })
    }, []);

    return (
        <Context.Provider value={[]}>
            <StyledGroupSection id="groupSection" onScroll={() => {
                const groupObj = document.querySelector("#groupSection") as HTMLElement
                const scrollTop = groupObj.scrollTop;
                // console.log(scrollTop)
                if (scrollTop == 0) {
                    setPositionPopUp(80)
                } else {
                    setPositionPopUp(80 + (scrollTop * 2))
                }
            }}>
                <GroupModal isOpen={isOpen} toggle={toggle} index={0}/>
                <StyledTitleSection>
                    <StyledP> Grupos </StyledP>
                    <ImgContainer>
                        <StyledImg onClick={addGroup} src={addGroupIcon}/>
                    </ImgContainer>
                </StyledTitleSection>
                {(filteredGroupsOwner.map((groups) => (
                        <MainGroups
                            key={groups._id} 
                            owner={groups.owner}
                            groupName={groups.name}
                            textSize={groups.name.length <= 16 ? 18 : 15}
                            displayEdit="block"
                            displayExit="none"
                            position={positionPopUp}
                        />
                )))}
                {(groupsIn.map((groups) => (
                        <MainGroups
                            key={groups._id} 
                            owner={groups.owner}
                            groupName={groups.name}
                            textSize={groups.name.length <= 16 ? 18 : 15}
                            displayEdit="none"
                            displayExit="block"
                            position={positionPopUp}
                        />
                )))}
                {/* <button onClick={toggle}> Open Modal</button> */}
            </StyledGroupSection>
        </Context.Provider>
    )
}