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

export default function Main(): JSX.Element {
    const { logo, id } = useContext(DataUserForHeader);
    const [components, setComponents] = useState<JSX.Element[]>([]);
    // const [dataFeeds, setDataFeeds] = useState<any>();
    let componentsOk: any;

    // ----- socket Feet -----
    // const socket = connect();

    // socket.on("feed", (data) => {
    //     componentsOk = data;
    //     console.log(data);
    //     console.log('@@@@@@@@@@@@@@@@@@@@');
    // });

    // socket.off('feed');
    // -----------------------

    useEffect(() => {
        async function fetchAndSetComponents() {
            const data = await createComponentsFeed();
            componentsOk = data;

            console.log(componentsOk, data);
            console.log('@', componentsOk[8]);
            const componetsEnd = await createcomponent([...componentsOk]);

            setComponents(componetsEnd);
        }

        fetchAndSetComponents();

        // socket.on("feed", (data) => {
        //     console.log('-', componentsOk);

        //     componentsOk.push(data);
        //     componentsOk.push(...componentsOk, ...componentsOk, ...componentsOk);

        //     console.log('-', componentsOk);

        //     console.log('@@@', data.data);

        //     const componetsEnd = createcomponent(componentsOk)
        //     console.log('!!!', componetsEnd);

        //     setComponents(componetsEnd);
        // });

        // socket.off('feed');
    }, []);

    async function createcomponent(data: any): Promise<JSX.Element[]> {
        return data.map((feed: IGetFeed) => (
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
        ));
    }

    async function createComponentsFeed(): Promise<JSX.Element[]> {
        const data = await fetchFeed();
        // setDataFeeds(data);
        return data;

        // return data.map((feed: IGetFeed) => (
        //     <FeedCommentLike
        //         src={
        //             feed.author.pathImage !== undefined
        //                 ? "https://api.socialtorcedor.shop/assets/" +
        //                 feed.author.pathImage
        //                 : "https://api.socialtorcedor.shop/assets/user_default.jpg"
        //         }
        //         user_name={feed.author.name}
        //         time_publication={formatTime(
        //             new Date(`${feed.createdAt}`)
        //         ).toString()}
        //         comment_post={feed.content}
        //         img_post={feed.pathImage}
        //         comments={feed.comments}
        //         likes={`${feed.likes ? feed.likes.length : 0}`}
        //         thisLike={feed.likes ? feed.likes.includes(`${id}`) : false}
        //     />
        // ));
    }

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
                {components}
            </StyledMainSection>

            <StyledRigthSection>
                <ChatComplete groupId="6419c2fc1e6038a18e8410b2" />
            </StyledRigthSection>
        </StyledMain>
    );
}
