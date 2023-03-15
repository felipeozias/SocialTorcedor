import { StyledChatCOntainer } from "./styles";
import ChatHeader from "../ChatHeader";
import ChatMessages from "../ChatMessages";

export default function ChatComplete() {
    return (
        <StyledChatCOntainer>
            <ChatHeader title='Grupo da casa' />
            <ChatMessages />
        </StyledChatCOntainer>
    )
}
