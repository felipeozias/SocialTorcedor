import { Imodal } from "../../../interfaces/Modal";
import { StyledModalOverlay } from "./styles";

export default function ModalOverlay(props: Imodal) {

    return(
        <StyledModalOverlay onClick={props.toggle}/>
    )
}