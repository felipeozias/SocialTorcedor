import IconEmotion from "../IconEmotion";
import IconImage from "../IconImage";
import { StyledContainer, StyledInput, StyledSpanPublic, StyledIconsOptions } from "./style";
import { KeyboardEvent } from 'react';


export default function FeedBarInput(props: { place_hoder: String, action: String, emotion?: boolean, image?: boolean }): JSX.Element {

    function resizeInput(e: KeyboardEvent<HTMLTextAreaElement>) {
        e.currentTarget.style.height = '35px';
        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
        console.log(e.currentTarget.scrollHeight)
    }

    if (props.image && props.emotion) {
        return (
            <StyledContainer>
                <StyledInput placeholder={props.place_hoder.toString()} onKeyUp={resizeInput} />
                <StyledSpanPublic>{props.action}</StyledSpanPublic>
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
                <StyledInput placeholder={props.place_hoder.toString()} onKeyUp={resizeInput} />
                <StyledSpanPublic>{props.action}</StyledSpanPublic>
                <StyledIconsOptions>
                    <IconImage />
                </StyledIconsOptions>
            </StyledContainer>
        )
    }
    
    if (props.emotion) {
        return (
            <StyledContainer>
                <StyledInput placeholder={props.place_hoder.toString()} onKeyUp={resizeInput} />
                <StyledSpanPublic>{props.action}</StyledSpanPublic>
                <StyledIconsOptions>
                    <IconEmotion />
                </StyledIconsOptions>
            </StyledContainer>
        )
    }

    return (
        <StyledContainer>
            <StyledInput placeholder={props.place_hoder.toString()} onKeyUp={resizeInput} />
            <StyledSpanPublic>{props.action}</StyledSpanPublic>
        </StyledContainer>
    )
}
