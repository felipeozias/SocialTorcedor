import { Container, Img, P, ChatIcon, ImgContainer, ImgContainer2 } from "./styles"
import userIcon from "../../assets/icon_user.png";
import chatIcon from "../../assets/chat.png"

interface Iprops {
    name: string,
    teamUrl: string
}

export default function MainUsers(props: Iprops): JSX.Element {
    
    function startChat() {
        // console.log("Iniciar chat")
    }

    return (
        <Container>
            <ImgContainer>
                <Img src={`https://api.socialtorcedor.shop/assets/${props.teamUrl}`} />
            </ImgContainer>
            <P> {props.name} </P>
            <ImgContainer2>
                <ChatIcon src={chatIcon} onClick={startChat}/>
            </ImgContainer2>
        </Container>
    )
}