import { StyledChatContainer } from "./styles";
import ChatHeader from "../ChatHeader";
import ChatMessages from "../ChatMessages";
import ChatInput from "../ChatInput";

export default function ChatComplete() {
    return (
        <StyledChatContainer>
            <ChatHeader title='Grupo da casa' />
            <ChatMessages />
            <ChatInput/>
        </StyledChatContainer>
    )
}
