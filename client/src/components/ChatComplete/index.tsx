import { StyledChatContainer } from "./styles";
import ChatHeader from "../ChatHeader";
import ChatMessages from "../ChatMessages";
import ChatInput from "../ChatInput";
import { useEffect, useRef, useState } from "react";
import chat from "../../services/chat";
import { StyleMessage } from "../ChatMessages/styles";
import { connect } from "../../services/socket";

interface IProps {
    groupId?: string;
    title: string;
    admin?: string;
    members: string;
    empty: boolean;
    children: any;
}

interface IChat {
    message: string;
    author: IAuthor;
}

interface IAuthor {
    name: string;
    _id: string;
}

//let chats: any = [];
//let groups = [];

const socket = connect();
socket.on("chat", (res: any) => {
    console.log("aaaaaaaa");
    //chats.push(res.data);
    //groups = res.data;
    //const chatData = chatAll;
    //console.log("Vindo do chat Message ", res);
    //chatData.push(res.data);
    //setChatAll(chatData);
    //setFail(true);
    //console.log("O state ChatDAta ", chatData);
});

export default function ChatComplete(props: IProps) {
    /* const [groups, setGroups] = useState<any>();
    const [fail, setFail] = useState(true);
    const [chatAll, setChatAll] = useState<Array<IChat>>([]);
    const [failure, setFailure] = useState(true);
    const [idGroup, setIdGroup] = useState("641a05b9e793ef2ca38b2eb0"); */
    //const divChat = useRef<HTMLDivElement>(null);
    //const socket = connect();
    //setChatAll()
    //setChatAll(chats);

    //console.log("bbbbbbbbbbbbbbbbbbbbb");

    /* socket.on("chat", (res: any) => {
        //console.log("aaaaaaaa");
        const chatData = chatAll;
        //console.log("Vindo do chat Message ", res);
        chatData.push(res.data);
        setChatAll(chatData);
        setFail(true);
        //console.log("O state ChatDAta ", chatData);
    }); */

    /* async function getGroups() {
        const dataGroups = await chat(idGroup);
        setGroups(dataGroups?.data);
        setChatAll(dataGroups?.data.data.chat);
        chats = dataGroups?.data.data.chat;
        setFail(false);

        setFailure(dataGroups.failure);
        return dataGroups;
    } */

    /* const divGroups = document.querySelectorAll(".group-me-user");
    for (let i = 0; divGroups.length > i; i++) {
        divGroups[i].addEventListener("click", () => {
            if (divGroups[i].id) {
                console.log("kkkkkk", divGroups[i].id);
                setIdGroup(divGroups[i].id);
                setFail(!fail);
            }
        });
    } */

    /*  const membersName = () => {
        let names = "";
        for (const memb of groups.data.members) {
            names += ` ${memb.name},`;
        }
        return names.slice(0, -1);
    };

    useEffect(() => {
        getGroups();
    }, [fail]); */

    /* useEffect(() => {
        console.log("ccccccccccccccccccc");
        setChatAll(chats);
    }, [chats]); */

    return (
        <StyledChatContainer>
            <ChatHeader
                title={props.title}
                admin={props.admin}
                members={props.members}
                empty={props.empty}
            />

            <ChatMessages /* ref={divChat} */>
                {
                    props.children /*  {!failure &&
                    chatAll.map((post: any) => {
                        return (
                            <StyleMessage>
                                <span>{post.author.name}:</span>
                                <p>{post.message}</p>
                            </StyleMessage>
                        );
                    })} */
                }
            </ChatMessages>
            <ChatInput id={props.groupId || ""} />
        </StyledChatContainer>
    );
}
