import { StyledContainer, BoxIconImage } from "./style";
import FeedBarInput from "../FeedBarInput";
import IconImage from "../ImagePerfil";
import { MouseEvent } from "react";
import { postFeed } from '../../services/feed'

interface IPropsFeednewPublication {
    place_hoder: string,
    src: string,
    alt: string,
    action: string,
    image?: boolean,
    emotion?: boolean
}

function handleClick(e: MouseEvent<HTMLButtonElement>, image: any, content: string, userId: string) {
    if (content) {
        console.log('Content: ', content, 'Image: ', image, 'UserId: ', userId);
        postFeed(content, image, userId);
    }
}

export default function Feed(props: IPropsFeednewPublication): JSX.Element {
    return (
        <StyledContainer>
            <BoxIconImage>
                <IconImage src={props.src} alt={props.alt} />
            </BoxIconImage>
            <FeedBarInput click={handleClick} place_hoder={props.place_hoder} action='Publicar' image={props.image ? true : false} emotion={props.emotion ? true : false} />
        </StyledContainer >
    )
}
