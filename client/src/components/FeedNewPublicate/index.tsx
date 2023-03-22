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
    img_post?: string
    image?: boolean,
    emotion?: boolean
}

function handleClick(e: MouseEvent<HTMLButtonElement>, image: any, content: string, userId: string, inputRef: React.RefObject<HTMLTextAreaElement>) {
    if (content) {
        postFeed(content, image, userId).then((data) => {
            if (data?.failure === false && inputRef.current) {
                inputRef.current.value = '';

                const localImg = document.getElementById('imgForInputPublication');
                if (localImg) { localImg.remove() }

                // inputRef.current?.dispatchEvent(new KeyboardEvent('keyup', {
                //     code: 'Space',
                //     key: ' ',
                //     keyCode: 32,
                //     which: 32,
                //     charCode: 32
                // }))
            }
        })
    }
}

export default function Feed(props: IPropsFeednewPublication): JSX.Element {
    return (
        <StyledContainer>
            <BoxIconImage>
                <IconImage src={props.src} alt={props.alt} />
            </BoxIconImage>
            <FeedBarInput img_post={props.img_post} click={handleClick} place_hoder={props.place_hoder} action='Publicar' image={props.image ? true : false} emotion={props.emotion ? true : false} />
        </StyledContainer >
    )
}
