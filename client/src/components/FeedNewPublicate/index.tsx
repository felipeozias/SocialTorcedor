import { StyledContainer, BoxIconImage } from "./style";
import FeedBarInput from "../FeedBarInput";
import IconImage from "../ImagePerfil";

interface IPropsFeednewPublication {
    place_hoder: String,
    src: String,
    alt: String,
    action: String,
    image?: boolean,
    emotion?: boolean
}

export default function Feed(props: IPropsFeednewPublication): JSX.Element {
    return (
        <StyledContainer>
            <BoxIconImage>
                <IconImage src={props.src} alt={props.alt} />
            </BoxIconImage>
            <FeedBarInput place_hoder={props.place_hoder} action='Publicar' image={props.image ? true : false} emotion={props.emotion ? true : false} />
        </StyledContainer>
    )
}
