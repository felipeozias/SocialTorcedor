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
        setGroups(dataGroups?.data);
        setFail(true);

        setMembers(dataGroups.data.members);
        return dataGroups;
    }

    const membersName = () => {
        let names = "";
        for (const memb of groups.data.members) {
            names += ` ${memb.name},`;
        }

        return names.slice(0, -1);
    };

    useEffect(() => {
        getGroups();
    }, [fail]);

    return (
        <StyledChatContainer>
            <ChatHeader
                title={groups ? groups.data.title : "Chat"}
                admin={groups ? groups.data.admin.name : ""}
                members={groups && membersName()}
                empty={!props.groupId}
            />
            <ChatMessages />
            <ChatInput />
        </StyledChatContainer>
    );
}
