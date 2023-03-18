import { StyledContainer, BoxIconImage } from "./style";
import FeedBarInput from "../FeedBarInput";
import IconImage from "../ImagePerfil";
import { MouseEvent } from "react";
import { postFeed } from '../../services/feed'


interface IPropsFeednewPublication {
    place_hoder: String,
    src: String,
    alt: String,
    action: String,
    image?: boolean,
    emotion?: boolean
}

function handleClick(e: MouseEvent<HTMLDivElement>, content?: String) {
    if (content) {
        postFeed(content);
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
