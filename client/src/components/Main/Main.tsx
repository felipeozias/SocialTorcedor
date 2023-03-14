import { StyledMain, StyledMainSection, StyledRigthSection } from './styles'
import MainLeftSection from '../MainLeftSection'
import FeedNewPublicate from "../FeedNewPublicate";
import FeedCommentLike from "../FeedCommentLike";

//------ Using context ------
import { useContext } from "react";
import DataUserForHeader from "../contexts/DataUserForHeader";

export default function Main(): JSX.Element {
    const { logo } = useContext(DataUserForHeader);

    const props_new_publication = {
        place_hoder: 'Adicione um feed aqui!',
        src: `${logo}`,
        alt: 'Image de perfil',
        action: 'Publicar',
        image: true
    }

    const props_comment_like = {
        src: 'https://cdn-icons-png.flaticon.com/512/219/219969.png',
        user_name: 'Torcedor Oficial',
        time_publication: 'Hoje às 7:00',
        comment_post: 'Vou te falar viu...',
        img_post: 'https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2017/05/04/590b489a49218.jpeg',
        comments: ['Comentario 1', 'Comentário 2']
    }

    return (
        <StyledMain>
            <MainLeftSection />

            <StyledMainSection>
                <FeedNewPublicate {...props_new_publication} />
                <FeedCommentLike  {...props_comment_like} />
            </StyledMainSection>

            <StyledRigthSection>
            </StyledRigthSection>
        </StyledMain>
    )
}
