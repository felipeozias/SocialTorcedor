import { StyledEmotions } from "./style";
import Emotion from "../../assets/icon_emotion_white.png"

export default function Emotions(props: { src?: String }): JSX.Element {

    return (
        <StyledEmotions src={props.src ? props.src.toString() : Emotion}>

        </StyledEmotions>
    )
}
