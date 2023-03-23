import { StyledMain, StyledMainSection, StyledRigthSection } from "./styles";
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

let posts: any[] = []
// ----- socket Feed -----
const socket = connect();
// -----------------------

export default function Main(): JSX.Element {
    const { logo, id } = useContext(DataUserForHeader);
    const [dataFeeds, setDataFeeds] = useState<any[]>([]);

    useEffect(() => {
        socket.on("feed", (data: any) => {

            if (data.action === 'insert' && data.target === 'post') {
                posts.unshift(data.data);
                setDataFeeds([]);
                setDataFeeds([...posts]);
            }

            if (data.action === 'update' && data.target === 'post') {
                const index = posts.findIndex(objeto => objeto._id === data.data._id);

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
            setDataFeeds(data)
        }

        fetchAndSetComponents();
    }, []);

    const props_new_publication = {
        place_hoder: "Adicione um feed aqui!",
        src: `${logo}`,
        alt: "Image de perfil",
        action: "Publicar",
        image: true,
    };

    return (
        <StyledMain>
            <MainLeftSection />

            <StyledMainSection>
                <FeedNewPublicate {...props_new_publication} />
                {
                    dataFeeds.map((feed: IGetFeed) => (
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
                            thisLike={feed.likes ? feed.likes.includes(`${id}`) : false}
                        />
                    ))
                }
            </StyledMainSection>

            <StyledRigthSection>
                <ChatComplete groupId="6419c2fc1e6038a18e8410b2" />
            </StyledRigthSection>
        </StyledMain>
    );
}
