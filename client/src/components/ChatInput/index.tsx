import { StyledChatContainer } from "./styles";
import FeedBarInput from "../FeedBarInput";

export default function ChatInput() {
    return (
        <StyledChatContainer>
            <FeedBarInput place_hoder='Escreva sua mensagem!' action='Enviar' emotion={true} />
        </StyledChatContainer>
    )
}
