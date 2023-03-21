import IconEmotion from "../IconEmotion";
import IconImage from "../IconImage";
import { StyledContainer, StyledInput, StyledSpanPublic, StyledIconsOptions } from "./style";
import { KeyboardEvent, MouseEvent, useRef } from 'react';

interface IPropsFeedBarInput {
    click?: (e: MouseEvent<HTMLDivElement>, value?: String) => void,
    place_hoder: String,
    action: String,
    emotion?: boolean,
    image?: boolean
}

export default function FeedBarInput(props: IPropsFeedBarInput): JSX.Element {

    function openImage(e: any) {
        const file = e.target.files[0]
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

    function resizeInput(e: KeyboardEvent<HTMLTextAreaElement>) {
        e.currentTarget.style.height = '35px';
        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
    }

    function submitFeed(e: MouseEvent<HTMLDivElement>) {
        if (props.click) {
            // console.log(imageRef.current);

            // props.click(e, inputRef.current?.value.toString());
        }
    }

    if (props.image && props.emotion) {
        return (
            <StyledContainer>
                <StyledInput ref={inputRef} placeholder={props.place_hoder.toString()} onKeyUp={resizeInput} />
                <StyledSpanPublic onClick={submitFeed}>{props.action}</StyledSpanPublic>
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
                <StyledInput ref={inputRef} placeholder={props.place_hoder.toString()} onKeyUp={resizeInput} />
                <StyledSpanPublic onClick={submitFeed}>{props.action}</StyledSpanPublic>
                <StyledIconsOptions>
                    <label htmlFor="inputFile">
                        <IconImage />
                    </label>
                </StyledIconsOptions>
                <input ref={imageRef} id='inputFile' type='file' accept="image/*" onChange={openImage} />
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
            <StyledInput ref={inputRef} placeholder={props.place_hoder.toString()} onKeyUp={resizeInput} />
            <StyledSpanPublic onClick={submitFeed}>{props.action}</StyledSpanPublic>
        </StyledContainer>
    )
}
