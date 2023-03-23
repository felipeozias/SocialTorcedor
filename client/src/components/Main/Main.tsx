import {
    BoxMessageChat,
    NicknameSpan,
    StyledMain,
    StyledMainSection,
    StyledRigthSection,
} from "./styles";
import MainLeftSection from "../MainLeftSection";
import FeedNewPublicate from "../FeedNewPublicate";
import FeedCommentLike from "../FeedCommentLike";
import ChatComplete from "../ChatComplete";

import { IGetFeed } from "../../interfaces/DataForFeed";
import { fetchFeed } from "../../services/feed";
import formatTime from "../../utils/formatTime";

//------ Using context ------
import { useContext, useEffect, useState } from "react";
import DataUserForHeader from "../contexts/DataUserForHeader";

import { connect } from "../../services/socket";
import chat from "../../services/chat";
import { StyleMessage } from "../ChatMessages/styles";

interface IChat {
    message: string;
    author: IAuthor;
}

interface IAuthor {
    name: string;
    nickname: string;
    _id: string;
}

let dataG: any = [];

let posts: any[] = [];
// ----- socket Feed -----
const socket = connect();
// -----------------------

export default function Main(): JSX.Element {
    const { logo, id } = useContext(DataUserForHeader);
    const [dataFeeds, setDataFeeds] = useState<any[]>([]);
    const [chatAll, setChatAll] = useState<Array<IChat>>([]);
    const [groups, setGroups] = useState<any>();
    const [groupId, setGroupId] = useState();
    let posts: any[] = [];
    let fail;

    // ----- socket Feet -----
    const socket = connect();

    useEffect(() => {
        socket.on("feed", (data: any) => {
            if (data.action === "insert" && data.target === "post") {
                posts.unshift(data.data);
                setDataFeeds([]);
                setDataFeeds([...posts]);
            }

            if (data.action === "update" && data.target === "post") {
                const index = posts.findIndex(
                    (objeto) => objeto._id === data.data._id
                );

                if (index !== -1) {
                    posts[index] = data.data;
                    setDataFeeds([]);
                    setDataFeeds([...posts]);
                }
            }
        });

        async function fetchAndSetComponents() {
            const data = await fetchFeed();
            posts = data;
            setDataFeeds(data);
        }

        fetchAndSetComponents();
    }, []);

    useEffect(() => {
        async function getGroups() {
            if (groupId) {
                dataG = await chat(groupId);
                setGroups(dataG.data);
                fail = dataG.failure;
                setChatAll(dataG.data.data.chat);
            }
        }
        getGroups();
    }, [groupId]);

    const props_new_publication = {
        place_hoder: "Adicione um feed aqui!",
        src: `${logo}`,
        alt: "Image de perfil",
        action: "Publicar",
        image: true,
    };

    useEffect(() => {
        socket.on("chat", (res: any) => {
            console.log("***********", res);

            const chat = dataG.data.data.chat;
            setChatAll([...chat, res.data]);
            chat.push(res.data);
        });
    }, []);

    const membersName = () => {
        let names = `${groups?.data?.admin ? groups.data.admin.name : ""},`;
        for (const memb of groups?.data?.members ? groups?.data?.members : []) {
            names += ` ${memb.name},`;
        }
        return names.slice(0, -1);
    };

    function clickGroup(e: any) {
        setGroupId(e.target.id);
    }

    return (
        <StyledMain>
            <MainLeftSection click={(e: any) => clickGroup(e)} />

            <StyledMainSection>
                <FeedNewPublicate {...props_new_publication} />
                {dataFeeds.map((feed: IGetFeed) => (
                    <FeedCommentLike
                        src={
                            feed.author.pathImage !== undefined
                                ? "https://api.socialtorcedor.shop/assets/" +
                                  feed.author.pathImage
                                : "https://api.socialtorcedor.shop/assets/user_default.jpg"
                        }
                        user_name={feed.author.name}
                        time_publication={formatTime(
                            new Date(`${feed.createdAt}`)
                        ).toString()}
                        comment_post={feed.content}
                        img_post={feed.pathImage}
                        comments={feed.comments}
                        likes={`${feed.likes ? feed.likes.length : 0}`}
                        thisLike={
                            feed.likes ? feed.likes.includes(`${id}`) : false
                        }
                    />
                ))}
            </StyledMainSection>

            <StyledRigthSection>
                <ChatComplete
                    groupId={groupId}
                    title={groups?.data?.title ? groups.data.title : "Chat"}
                    members={!fail ? membersName() : ""}
                    admin={
                        groups?.data?.admin?.name
                            ? groups.data.admin.name
                            : "Alguem"
                    }
                    empty={!groupId}
                >
                    {groupId ? (
                        chatAll.map((post: IChat) => {
                            return (
                                <StyleMessage>
                                    <span>
                                        {`${post.author.name.split(" ")[0]} `}
                                        <NicknameSpan>
                                            {`(${post.author.nickname}) :`}
                                        </NicknameSpan>
                                    </span>
                                    <p>{post.message}</p>
                                </StyleMessage>
                            );
                        })
                    ) : (
                        <BoxMessageChat>
                            <p>
                                Escolha um grupo para interagir no chat, ou
                                então, crie novos grupos com seus amigos ou
                                rivais. 😁{" "}
                            </p>
                        </BoxMessageChat>
                    )}
                </ChatComplete>
            </StyledRigthSection>
        </StyledMain>
    );
}
