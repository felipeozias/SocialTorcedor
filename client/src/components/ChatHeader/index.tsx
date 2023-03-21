import { InfoChat, StyledChatContainer, StyledTitleSpan } from "./styles";

interface IPropsChat {
    title?: string;
    admin?: string;
    members?: string;
    empty: boolean;
}

export default function ChatHeader(props: IPropsChat) {
    return (
        <StyledChatContainer>
            <StyledTitleSpan>{props.title}</StyledTitleSpan>
            {props.empty && (
                <>
                    <InfoChat>Criado por: {props.admin}</InfoChat>
                    <InfoChat>Participantes: {props.members}</InfoChat>
                </>
            )}
        </StyledChatContainer>
    );
}
