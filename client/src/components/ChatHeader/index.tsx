import { StyledChatContainer, StyledTitleSpan } from "./styles";

export default function ChatHeader(props: { title: String }) {
    return (
        <StyledChatContainer>
            <StyledTitleSpan>{props.title}</StyledTitleSpan>
        </StyledChatContainer>
    )
}
