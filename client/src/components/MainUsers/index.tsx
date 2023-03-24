import {
    Container,
    Img,
    P,
    ChatIcon,
    ImgContainer,
    ImgContainer2,
    Span,
} from "./styles";
import userIcon from "../../assets/icon_user.png";
import chatIcon from "../../assets/chat.png";

interface Iprops {
    name: string;
    teamUrl: string;
    nickname: string;
}

export default function MainUsers(props: Iprops): JSX.Element {
    function startChat() {
    }

    return (
        <Container>
            <ImgContainer
                src={`${process.env.REACT_APP_API}/assets/${props.teamUrl}`}
            >
                {/*  <Img
                    src={`${process.env.REACT_APP_API}/assets/${props.teamUrl}`}
                /> */}
            </ImgContainer>
            {/* <P> {props.nickname} <Span> ({props.name}) </Span></P> */}
            <P>
                <span>
                    {props.name} <Span> {` (${props.nickname})`} </Span>
                </span>
            </P>
            <ImgContainer2>
                <ChatIcon src={chatIcon} onClick={startChat} />
            </ImgContainer2>
        </Container>
    );
}
