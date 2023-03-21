import { StyledChatContainer } from "./styles";
import ChatHeader from "../ChatHeader";
import ChatMessages from "../ChatMessages";
import ChatInput from "../ChatInput";
import { useEffect, useState } from "react";
import chat from "../../services/chat";

interface IProps {
    groupId?: string;
}

export default function ChatComplete(props: IProps) {
    const [groups, setGroups] = useState<any>();
    const [members, setMembers] = useState();
    const [fail, setFail] = useState(true);

    async function getGroups() {
        const dataGroups = await chat(props.groupId as string);

        //console.log("Dados do grupo estão assim => ", dataGroups);

        setGroups(dataGroups?.data);
        setFail(true);

        setMembers(dataGroups.data.members);
        return dataGroups;
    }

    useEffect(() => {
        getGroups();
    }, [fail]);

    return (
        <StyledChatContainer>
            <ChatHeader
                title={/* groups ? groups.data.title :  */ "Chat"}
                admin={/* groups ? groups.data.admin.name :  */ ""}
                empty={false}
            />
            <ChatMessages />
            <ChatInput />
        </StyledChatContainer>
    );
}
