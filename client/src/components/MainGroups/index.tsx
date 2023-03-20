import { 
    Container, 
    Img, 
    P,
    P2, 
    EditIcon,
    ExitIcon, 
    ImgContainer,
    ImgContainer2, 
    Pcontainer,
    Popup
    } from "./styles"
import logoIcon from "../../assets/logo.png";
import exitIcon from "../../assets/exit.png"
import editIcon from "../../assets/edit.png"
import { useContext, useState } from "react";
import DataUserForHeader from "../contexts/DataUserForHeader";
import Context from "../../hooks/useContext";
import exitGroup from "../../services/exitGroup";
import NotificationModal from "../modals/NotificationModal";
import EditGroupModal from "../modals/EditGroupModal";
import useModal from "../../hooks/useModal";
import editGroupService from "../../services/editGroup";
import { IGetGroups } from "../../interfaces/Groups";

interface Iprops {
    owner: string,
    adminName: string,
    groupName: string,
    groupId: string,
    textSize: number,
    displayEdit: string,
    displayExit: string,
    position: number,
}

export default function MainGroups(props: Iprops): JSX.Element {
    const { isOpen, toggle } = useModal();
    let [borderActive, setBorderActive] = useState("");
    let [isOpenExitIcon, setIsOpenExitIcon] = useState(false);
    let [isOpenEditIcon, setIsOpenEditIcon] = useState(false);
    let [isOpenNotif, setIsOpenNotif] = useState(false);
    let [notifMessage, setNotifMessage] = useState("");
    let [groupAtributes, setGroupAtributes] = useState<IGetGroups>()

    const { id } = useContext(DataUserForHeader);
    const userId = id.toString();


    function exit() {
        // console.log("Sair do grupo")
        const userData = {
            groupId: props.groupId,
            userId: userId
        }
        console.log(userData);
        exitGroup(userData);
        setNotifMessage(`Você saiu do grupo!`);
        setIsOpenNotif(true);
        setTimeout(() => {
            setIsOpenNotif(false);
        }, 2000);
    }
    async function editGroup() {
        console.log("editar grupo");
        let res = await editGroupService( {groupId: props.groupId});
        if (res?.status == 200) {
            console.log(res.data["data"])
            setGroupAtributes(res.data["data"])
        }
        toggle();
    }
    function activateBorder() {
        console.log("a")
        setBorderActive("solid")
    }

    return (
        <Container border={borderActive}>
            <NotificationModal
                message={notifMessage}
                isOpen={isOpenNotif}
                toggle={() => {}}
                index={0}
                leftPosition={30}
                bottomPosition={70}
            />
            <EditGroupModal 
                isOpen={isOpen}
                toggle={toggle}
                index={0}
                group={groupAtributes}
            />
            <ImgContainer>
                <Img src={logoIcon} />
            </ImgContainer>
            <Pcontainer onClick={activateBorder}>
                <P textSize={props.textSize}> {props.groupName} </P>
                <P2> Criado por: {props.adminName}</P2>
            </Pcontainer>
            <ImgContainer2>
                {isOpenExitIcon && <Popup position={props.position}>Sair do Grupo</Popup>}
                <ExitIcon display={props.displayExit} onMouseOut={()=> {setIsOpenExitIcon(false)}} onMouseEnter={() => {setIsOpenExitIcon(true)}} src={exitIcon} onClick={exit}/>
                {isOpenEditIcon && <Popup position={props.position}>Editar Grupo</Popup>}
                <EditIcon display={props.displayEdit} onMouseOut={()=> {setIsOpenEditIcon(false)}} onMouseEnter={() => {setIsOpenEditIcon(true)}} src={editIcon} onClick={editGroup}/>
            </ImgContainer2>
        </Container>
    )
}