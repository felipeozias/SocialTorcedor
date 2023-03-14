import { StyledEmotions } from "./style";
import Emotion from "../../assets/icon_emotion_white.png"
// import { KeyboardEvent } from 'react';


export default function Emotions(): JSX.Element {

    // function resizeInput(value: KeyboardEvent<HTMLTextAreaElement>) {
    //     value.currentTarget.style.height = '35px';
    //     value.currentTarget.style.height = `${value.currentTarget.scrollHeight}px`;
    //     console.log(value.currentTarget.scrollHeight)
    // }

    return (
        <StyledEmotions src={Emotion}>

        </StyledEmotions>
    )
}
