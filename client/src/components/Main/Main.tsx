import { StyledMain, StyledMainSection, StyledRigthSection } from './styles'
import MainLeftSection from '../MainLeftSection'
import FeedNewPublicate from "../FeedNewPublicate";
import FeedCommentLike from "../FeedCommentLike";
import ChatComplete from "../ChatComplete";

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

    const props_comment_like1 = {
        src: 'https://cdn-icons-png.flaticon.com/512/219/219969.png',
        user_name: 'Torcedor Oficial',
        time_publication: 'Hoje às 9:30',
        comment_post: 'Vou te falar viu...',
        img_post: 'https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2017/05/04/590b489a49218.jpeg',
        comments: ['Comentario 1', 'Comentário 2'],
        likes:'3'
    }

    const props_comment_like2 = {
        src: 'https://static.adecoretecidos.com.br/public/adecoretecidos/imagens/produtos/painel-sublimado-flamengo-futebol-time-16429.png',
        user_name: 'Raimundo goleiro',
        time_publication: 'Hoje às 8:25',
        comment_post: 'Será mesmo?',
        img_post: 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2017/10/22089278_1991067854509797_8082300144490452938_n.jpg',
        comments: ['Comentario 1', 'Comentário 2'],
        likes:'55'
    }

    const props_comment_like3 = {
        src: 'https://i.pinimg.com/originals/34/a4/d2/34a4d2b6a662c23d87cca96b64b57af5.png',
        user_name: 'Jose da pelada',
        time_publication: 'Hoje às 7:00',
        comment_post: '',
        img_post: 'http://images7.memedroid.com/images/UPLOADED861/5a5b7ef707a53.jpeg',
        comments: ['Comentario 1', 'Comentário 2'],
        likes:'11'
    }

    return (
        <StyledMain>
            <MainLeftSection />

            <StyledMainSection>
                <FeedNewPublicate {...props_new_publication} />
                <FeedCommentLike  {...props_comment_like1} />
                <FeedCommentLike  {...props_comment_like2} />
                <FeedCommentLike  {...props_comment_like3} />
            </StyledMainSection>

            <StyledRigthSection>
                <ChatComplete />
            </StyledRigthSection>
        </StyledMain>
    )
}
