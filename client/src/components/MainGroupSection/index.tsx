import { StyledGroupSection, StyledImg, StyledP, StyledTitleSection, ImgContainer } from "./styles"
import MainGroups from "../MainGroups"
import addGroupIcon from "../../assets/group-add.png"
import { apiRequestGroups } from "../../database"
import GroupModal from "../../components/modals/GroupModal";
import useModal from "../../hooks/useModal";
import { useState, useEffect } from "react";
import Context from "../../hooks/useContext";
import { IGetGroups } from "../../interfaces/Groups";
import { useContext } from "react";
import DataUserForHeader from "../contexts/DataUserForHeader";

export default function MainGroupSection() {
    const { isOpen, toggle } = useModal();
    let [positionPopUp, setPositionPopUp] = useState(80);
    let [reqGroups, setReqGroups] = useState([] as IGetGroups[])
    let [reqSuccess, setReqSuccess] = useState(false);
    const { id } = useContext(DataUserForHeader);
    const userId = id.toString();

    async function requestDb() {
        let res = await apiRequestGroups();
        // console.log(res)
        if (res.succesfull) {
            setReqGroups(res.data);
            setReqSuccess(res.succesfull);
            console.log(res.data)
        }
    }

    function addGroup() {
        // console.log("Criar grupo!")
        toggle();
    }
    
    let filteredGroupsOwner = reqGroups.filter(group => group.admin._id.includes(userId));
    console.log(filteredGroupsOwner)
    let filteredGroupsIn = reqGroups.map(group => group.members.filter(users => users._id.includes(userId)));
    console.log(filteredGroupsIn)
    let positionArray: Array<number> = [];
    let c = 0;
    filteredGroupsIn.forEach(el => {
        if (el.length > 0) {
            positionArray.push(c)
        }
        c ++
    });
    // console.log(positionArray);
    let groupsIn: IGetGroups[] = [];
    positionArray.forEach(el => {
        groupsIn.push(reqGroups[el])
    })
    // console.log(groupsIn);
    
    useEffect(() => {
        requestDb();
    }, [reqSuccess]);

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
                            owner={groups.admin._id}
                            adminName={groups.admin.name}
                            groupName={groups.title}
                            textSize={groups.title.length <= 16 ? 18 : 15}
                            displayEdit="block"
                            displayExit="none"
                            position={positionPopUp}
                            groupId={groups._id}
                        />
                )))}
                {(groupsIn.map((groups) => (
                        <MainGroups
                            key={groups._id} 
                            owner={groups.admin._id}
                            adminName={groups.admin.name}
                            groupName={groups.title}
                            textSize={groups.title.length <= 16 ? 18 : 15}
                            displayEdit="none"
                            displayExit="block"
                            position={positionPopUp}
                            groupId={groups._id}
                        />
                )))}
            </StyledGroupSection>
        </Context.Provider>
    )
}