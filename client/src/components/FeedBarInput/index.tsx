import IconEmotion from "../IconEmotion";
import IconImage from "../IconImage";
import { StyledContainer, StyledInput, StyledSpanPublic, StyledIconsOptions } from "./style";
import { KeyboardEvent, MouseEvent, useRef, useState } from 'react';
import { postCommentFeed } from "../../services/feed";

import DataUserForHeader from "../contexts/DataUserForHeader";
import { useContext } from "react";

interface IPropsFeedBarInput {
    click?: (e: MouseEvent<HTMLButtonElement>, image: string, content: string, id: string) => void,
    place_hoder: string,
    action: string,
    emotion?: boolean,
    image?: boolean
    img_post?: string
}

export default function FeedBarInput(props: IPropsFeedBarInput): JSX.Element {
    const { id } = useContext(DataUserForHeader);
    const [image, setImage] = useState('');

    function openImage(e: any) {
        e.preventDefault();

        const file = e.target.files[0];
        setImage(file);

        const viewImage: Element | null = document.getElementById('viewImageInput');

        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', (e) => {
                const file2 = e.target;

                const resetElement = document.getElementById('imgForInputPublication');
                if (resetElement) { resetElement.remove() }

                const info = document.createElement('div');
                info.id = 'imgForInputPublication';

                if (file2?.result) { info.textContent = 'Imagem: ' + file.name }
                viewImage?.appendChild(info);
            })
            reader.readAsDataURL(file);
        } else {
            const resetElement = document.getElementById('imgForInputPublication');
            if (resetElement) { resetElement.remove() }
        }
    }

    const inputRef = useRef<HTMLTextAreaElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const inputRefCommentFeed = useRef<HTMLTextAreaElement>(null);

    function resizeInput(e: KeyboardEvent<HTMLTextAreaElement>) {
        e.currentTarget.style.height = '35px';
        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
    }

    function submitFeed(e: MouseEvent<HTMLButtonElement>) {
        if (props.click) {
            e.preventDefault()

            // ADICIONAR O MODAL DE ALERTA!!!
            if (image) {
                let content = '.....';
                if (inputRef.current && inputRef.current.value !== '') {
                    content = inputRef.current.value
                }

                props.click(
                    e,
                    image,
                    content,
                    id
                );
            } else {
                alert("Insira uma foto!")
            }
        }
    }

    function commentFeed(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        const elementInput = inputRefCommentFeed.current;

        const userId = id;
        const postId = elementInput ? elementInput.id.toString().replace('.jpg', '').replace('.png', '') : '';
        const content: string = elementInput ? elementInput.value : '';

        // ADICIONAR O MODAL DE ALERTA!!!
        if ((content ? content.length : 0) > 4) {
            postCommentFeed(content, userId, postId);
        } else {
            alert("Escreva um comentário com pelo menos 5 caracteres!")
        }

    }

    if (props.image && props.emotion) {
        return (
            <StyledContainer>
                <StyledInput ref={inputRef} placeholder={props.place_hoder.toString()} onKeyUp={resizeInput} />
                <StyledSpanPublic onClick={e => submitFeed(e)}>{props.action}</StyledSpanPublic>
                <StyledIconsOptions id="box_emotion_image">
                    <IconEmotion />
                    <IconImage />
                </StyledIconsOptions>
            </StyledContainer>
        )
    }

    if (props.image) {
        return (
            <StyledContainer>
                <StyledInput name="content" ref={inputRef} placeholder={props.place_hoder.toString()} onKeyUp={resizeInput} />
                <StyledSpanPublic onClick={submitFeed}>{props.action}</StyledSpanPublic>
                <StyledIconsOptions>
                    <label htmlFor="inputFile">
                        <IconImage />
                    </label>
                </StyledIconsOptions>
                <input name="photo" ref={imageRef} id='inputFile' type='file' accept=".jpg,.png" onChange={e => openImage(e)} />
                <div id='viewImageInput' />
            </StyledContainer>
        )
    }

    if (props.emotion) {
        return (
            <StyledContainer>
                <StyledInput ref={inputRef} placeholder={props.place_hoder.toString()} onKeyUp={resizeInput} />
                <StyledSpanPublic onClick={submitFeed}>{props.action}</StyledSpanPublic>
                <StyledIconsOptions>
                    <IconEmotion />
                </StyledIconsOptions>
            </StyledContainer>
        )
    }

    return (
        <StyledContainer>
            <StyledInput id={props.img_post} ref={inputRefCommentFeed} placeholder={props.place_hoder.toString()} onKeyUp={resizeInput} />
            <StyledSpanPublic onClick={commentFeed}>{props.action}</StyledSpanPublic>
        </StyledContainer>
    )
}
