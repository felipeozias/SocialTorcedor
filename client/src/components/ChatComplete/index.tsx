import { StyledChatContainer } from "./styles";
import ChatHeader from "../ChatHeader";
import ChatMessages from "../ChatMessages";
import ChatInput from "../ChatInput";

interface IProps {
    groupId?: string;
    title: string;
    admin?: string;
    members: string;
    empty: boolean;
    children: any;
}

export default function ChatComplete(props: IProps) {
    return (
        <StyledChatContainer>
            <ChatHeader
                title={props.title}
                admin={props.admin}
                members={props.members}
                empty={props.empty}
            />

            <ChatMessages>{props.children}</ChatMessages>
            <ChatInput id={props.groupId || ""} />
        </StyledChatContainer>
    );
}
