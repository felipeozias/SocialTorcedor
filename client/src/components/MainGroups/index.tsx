import { 
    Container, 
    Img, 
    P,
    P2, 
    ChatIcon, 
    ImgContainer,
    ImgContainer2, 
    Pcontainer 
    } from "./styles"
import logoIcon from "../../assets/logo.png";
import chatIcon from "../../assets/chat.png"
import editIcon from "../../assets/edit.png"

interface Iprops {
    name: string,
    groupName: string
}

export default function MainGroups(props: Iprops): JSX.Element {
    
    function startChat() {
        console.log("Iniciar chat")
    }
    function editGroup() {
        console.log("editar grupo")
    }
    return (
        <Container>
            <ImgContainer>
                <Img src={logoIcon} />
            </ImgContainer>
            <Pcontainer>
                <P> {props.groupName} </P>
                <P2> Criado por: {props.name}</P2>
            </Pcontainer>
            <ImgContainer2>
                <ChatIcon src={chatIcon} onClick={startChat}/>
                <ChatIcon src={editIcon} onClick={editGroup}/>
            </ImgContainer2>
        </Container>
    )
}