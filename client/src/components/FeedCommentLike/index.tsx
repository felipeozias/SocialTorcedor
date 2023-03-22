import {
    StyledContainer,
    StyledComment,
    StyledUserContainer,
    StyledCommetPost,
    StyledImgPost,
    StyledNumLikes,
    StyledCommentLike,
    StyledContainerLikesComment,
    StyledLikeComment,
} from "./style";
import IconLike from "../../assets/icon_like.svg";
import IconLikeBlue from "../../assets/icon_like_blue.svg";
import IconComment from "../../assets/icon_comment.svg";
import FeedNewPublicate from "../FeedNewPublicate";
import IconImage from "../ImagePerfil";
import PerfilNameEmail from "../PerfilNameEmail";
import { ICommentFeed } from "../../interfaces/DataForFeed";

import CommentsFeed from "../CommentsFeed";
import { LikeFeed } from "../../services/feed";

//------ Using context ------
import { useContext } from "react";
import DataUserForHeader from "../contexts/DataUserForHeader";

interface IProps {
    src: string;
    user_name: string;
    time_publication: string;
    thisLike: boolean,
    comment_post?: string;
    img_post?: string;
    comments: ICommentFeed[];
    likes?: string;
}

export default function FeedCommentLike(props: IProps): JSX.Element {
    const { logo, id } = useContext(DataUserForHeader);
    return (
        <StyledContainer>
            <StyledUserContainer>
                <IconImage src={props.src} alt="Image de perfil" />
                <PerfilNameEmail
                    name={props.user_name}
                    nickname={props.time_publication}
                />
            </StyledUserContainer>

            <StyledCommetPost>{props.comment_post}</StyledCommetPost>

            <StyledImgPost
                src={`${process.env.REACT_APP_API}/assets/` + props.img_post}
                alt="Imagem da publicação"
            ></StyledImgPost>

            <StyledCommentLike>
                <StyledNumLikes>
                    {props.likes
                        ? props.likes.toString() === "1"
                            ? "1 curtida"
                            : props.likes + " curtidas"
                        : "0 curtidas"}
                </StyledNumLikes>
                <StyledContainerLikesComment>
                    <StyledLikeComment id={props.img_post + '###'}
                        onClick={(e: React.MouseEvent<HTMLParagraphElement>) => {
                            const IdthisElement: any = e.target;
                            const postId = IdthisElement.id.toString().replace('.jpg###', '').replace('.png###', '');
                            const userId = id;

                            LikeFeed(postId, userId)
                        }}>
                        <img src={props.thisLike ? IconLikeBlue : IconLike} alt="Icone like" />
                        Curtir
                    </StyledLikeComment>

                    <StyledLikeComment onClick={(e) => {
                        const meuElemento: HTMLInputElement | null = document.getElementById(`${props.img_post}`) as HTMLInputElement;
                        if (meuElemento) {
                            meuElemento.focus();
                        }
                    }}>
                        <img src={IconComment} alt="Icone comentario" />
                        <span>Comentar</span>
                    </StyledLikeComment>
                </StyledContainerLikesComment>
            </StyledCommentLike>

            {CommentsFeed(props.comments)}

            <StyledComment>
                <FeedNewPublicate
                    img_post={props.img_post}
                    place_hoder="Adicione um comentário aqui!"
                    src={logo}
                    alt="Image de perfil"
                    action="Publicar"
                // emotion={true}
                />
            </StyledComment>
        </StyledContainer>
    );
}
