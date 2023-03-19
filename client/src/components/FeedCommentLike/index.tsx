import {
    StyledContainer,
    StyledComment,
    StyledUserContainer,
    StyledCommetPost,
    StyledImgPost,
    StyledNumLikes,
    StyledCommentLike,
    StyledContainerLikesComment,
    StyledLikeComment
} from "./style";
import IconLike from "../../assets/icon_like.svg";
import IconComment from "../../assets/icon_comment.svg";
import FeedNewPublicate from "../FeedNewPublicate"
import IconImage from "../ImagePerfil";
import PerfilNameEmail from "../PerfilNameEmail";
import { ICommentFeed } from "../../interfaces/DataForFeed";

//------ Using context ------
import { useContext } from "react";
import DataUserForHeader from "../contexts/DataUserForHeader";

interface IProps {
    src: String,
    user_name: String,
    time_publication: String,
    comment_post?: String,
    img_post?: String,
    comments?: ICommentFeed[],
    likes?: String
}

export default function FeedCommentLike(props: IProps): JSX.Element {
    const { logo } = useContext(DataUserForHeader);
    return (
        <StyledContainer>
            <StyledUserContainer>
                <IconImage src={props.src.toString()} alt='Image de perfil' />
                <PerfilNameEmail name={props.user_name.toString()} email={props.time_publication} />
            </StyledUserContainer>

            <StyledCommetPost>{props.comment_post}</StyledCommetPost>

            <StyledImgPost src={props.img_post?.toString()} alt='Imagem da publicação'></StyledImgPost>

            <StyledCommentLike>
                <StyledNumLikes>{props.likes ? (props.likes.toString() === '1' ? '1 curtida' : props.likes + ' curtidas') : '0 curtidas'}</StyledNumLikes>
                <StyledContainerLikesComment>
                    <StyledLikeComment>
                        <img src={IconLike} alt="Icone like" />
                        Curtir
                    </StyledLikeComment>

                    <StyledLikeComment >
                        <img src={IconComment} alt="Icone comentario" />
                        <span>Comentar</span>
                    </StyledLikeComment>

                </StyledContainerLikesComment>
            </StyledCommentLike>

            <StyledComment>
                <FeedNewPublicate place_hoder='Adicione um comentário aqui!' src={logo.toString()} alt='Image de perfil' action='Publicar' emotion={true} />
            </StyledComment>
        </StyledContainer>
    )
}
