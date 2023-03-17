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
import Context from "../../hooks/useContext";

interface Iprops {
    owner: string,
    groupName: string,
    textSize: number,
    displayEdit: string,
    displayExit: string,
    position: number
}

export default function MainGroups(props: Iprops): JSX.Element {
    let [borderActive, setBorderActive] = useState("");
    let [isOpen, setIsOpen] = useState(false);
    let [isOpen2, setIsOpen2] = useState(false);

    function exitGroup() {
        console.log("Sair do grupo")
    }
    function editGroup() {
        console.log("editar grupo")
    }
    function activateBorder() {
        console.log("a")
        setBorderActive("solid")
    }

    return (
        <Container border={borderActive}>
            <ImgContainer>
                <Img src={logoIcon} />
            </ImgContainer>
            <Pcontainer onClick={activateBorder}>
                <P textSize={props.textSize}> {props.groupName} </P>
                <P2> Criado por: {props.owner}</P2>
            </Pcontainer>
            <ImgContainer2>
                {isOpen && <Popup position={props.position}>Sair do Grupo</Popup>}
                <ExitIcon display={props.displayExit} onMouseOut={()=> {setIsOpen(false)}} onMouseEnter={() => {setIsOpen(true)}} src={exitIcon} onClick={exitGroup}/>
                {isOpen2 && <Popup position={props.position}>Editar Grupo</Popup>}
                <EditIcon display={props.displayEdit} onMouseOut={()=> {setIsOpen2(false)}} onMouseEnter={() => {setIsOpen2(true)}} src={editIcon} onClick={editGroup}/>
            </ImgContainer2>
        </Container>
    )
}