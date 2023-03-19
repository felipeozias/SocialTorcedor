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
import { useState } from "react";
import exitGroup from "../../services/exitGroup";
import { simulateLogin } from "../../database";
import NotificationModal from "../modals/NotificationModal";

interface Iprops {
    owner: string,
    adminName: string,
    groupName: string,
    groupId: string,
    textSize: number,
    displayEdit: string,
    displayExit: string,
    position: number
}

export default function MainGroups(props: Iprops): JSX.Element {
    let [borderActive, setBorderActive] = useState("");
    let [isOpen, setIsOpen] = useState(false);
    let [isOpen2, setIsOpen2] = useState(false);
    let [isOpenNotif, setIsOpenNotif] = useState(false);
    let [notifMessage, setNotifMessage] = useState("");
    function exit() {
        // console.log("Sair do grupo")
        const userData = {
            groupId: props.groupId,
            userId: simulateLogin._id
        }
        // console.log(userData);
        exitGroup(userData);
        setNotifMessage(`Você saiu do grupo!`);
        setIsOpenNotif(true);
        setTimeout(() => {
            setIsOpenNotif(false);
        }, 2000);
    }
    function editGroup() {
        // console.log("editar grupo")
    }
    function activateBorder() {
        // console.log("a")
        setBorderActive("solid")
    }

    return (
        <Container border={borderActive}>
            <NotificationModal
                message={notifMessage}
                isOpen={isOpenNotif}
                toggle={() => {}}
                index={0}
            />
            <ImgContainer>
                <Img src={logoIcon} />
            </ImgContainer>
            <Pcontainer onClick={activateBorder}>
                <P textSize={props.textSize}> {props.groupName} </P>
                <P2> Criado por: {props.adminName}</P2>
            </Pcontainer>
            <ImgContainer2>
                {isOpen && <Popup position={props.position}>Sair do Grupo</Popup>}
                <ExitIcon display={props.displayExit} onMouseOut={()=> {setIsOpen(false)}} onMouseEnter={() => {setIsOpen(true)}} src={exitIcon} onClick={exit}/>
                {isOpen2 && <Popup position={props.position}>Editar Grupo</Popup>}
                <EditIcon display={props.displayEdit} onMouseOut={()=> {setIsOpen2(false)}} onMouseEnter={() => {setIsOpen2(true)}} src={editIcon} onClick={editGroup}/>
            </ImgContainer2>
        </Container>
    )
}