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
    const inputRef = useRef<HTMLTextAreaElement>(null);

    function resizeInput(e: KeyboardEvent<HTMLTextAreaElement>) {
        e.currentTarget.style.height = '35px';
        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
    }

    function submitFeed(e: MouseEvent<HTMLDivElement>) {
        if (props.click) {
            props.click(e, inputRef.current?.value.toString());
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
                    <IconImage />
                </StyledIconsOptions>
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
