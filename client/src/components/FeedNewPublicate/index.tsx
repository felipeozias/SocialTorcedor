import { StyledContainer, BoxIconImage } from "./style";
import FeedBarInput from "../FeedBarInput";
import IconImage from "../ImagePerfil";
import { MouseEvent, useState } from "react";
import { postFeed } from '../../services/feed'
import ModalAlert from "../ModalAlert";

interface IPropsFeednewPublication {
    place_hoder: string,
    src: string,
    alt: string,
    action: string,
    img_post?: string
    image?: boolean,
    emotion?: boolean
}

export default function Feed(props: IPropsFeednewPublication): JSX.Element {
    const [modalAlert, setModalAlert] = useState({ content: ``, color: '', times: 2 })

    function handleClick(e: MouseEvent<HTMLButtonElement>, image: any, content: string, userId: string, inputRef: React.RefObject<HTMLTextAreaElement>) {
        if (content !== undefined) {
            postFeed(content, image, userId).then((data) => {

                if (data?.failure) {
                    setModalAlert({ content: `${data.error}`, color: 'red', times: 2 })
                    return;
                }

                if (data?.failure === false) {
                    setModalAlert({ content: `Publicação realizada com sucesso!`, color: 'green', times: 2 })

                    if (inputRef.current) {
                        inputRef.current.value = '';

                        const localImg = document.getElementById('imgForInputPublication');
                        if (localImg) { localImg.remove() }
                    }
                }
            })
        }
    }

    return (
        <StyledContainer>
            <BoxIconImage>
                <IconImage src={props.src} alt={props.alt} />
            </BoxIconImage>
            <FeedBarInput img_post={props.img_post} click={handleClick} place_hoder={props.place_hoder} action='Publicar' image={props.image ? true : false} emotion={props.emotion ? true : false} />
            <ModalAlert>{modalAlert}</ModalAlert>
        </StyledContainer >
    )
}
