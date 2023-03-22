import { StyledChatContainer } from "./styles";
import ChatHeader from "../ChatHeader";
import ChatMessages from "../ChatMessages";
import ChatInput from "../ChatInput";
import { useEffect, useState } from "react";
import chat from "../../services/chat";
import { StyleMessage } from "../ChatMessages/styles";
import { connect } from "../../services/socket";

interface IProps {
    groupId?: string;
}

interface IChat {
    message: string;
    author: IAuthor;
}

interface IAuthor {
    name: string;
    _id: string;
}

export default function ChatComplete(props: IProps) {
    const [groups, setGroups] = useState<any>();
    const [fail, setFail] = useState(true);
    const [chatAll, setChatAll] = useState<Array<IChat>>([]);
    const socket = connect();

    socket.on("chat", (res: any) => {
        const chatData = chatAll;
        if (
            !(res.data.message === chatData[chatData.length - 1].message) &&
            res.data.author._id === chatData[chatData.length - 1].author._id
        ) {
            chatData.push(res.data);
            setChatAll(chatData);
        }

        /* console.log("Vindo do chat Message ", res);
        console.log("O state do chat ", chatAll); */
    });

    async function getGroups() {
        const dataGroups = await chat(
            "641a05b9e793ef2ca38b2eb0" /* props.groupId as string */
        );
        setGroups(dataGroups?.data);
        setChatAll(dataGroups?.data.data.chat);
        setFail(true);
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
            <ChatMessages>
                {chatAll.map((post: any) => {
                    return (
                        <StyleMessage>
                            <span>{post.author.name}:</span>
                            <p>{post.message}</p>
                        </StyleMessage>
                    );
                })}
            </ChatMessages>
            <ChatInput />
        </StyledChatContainer>
    );
}
