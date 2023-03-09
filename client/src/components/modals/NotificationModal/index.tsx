import { StyledModal } from "./styles";
import { InotificationModal } from "../../../interfaces/Modal";
import ModalOverlay from "../ModalOverlay";

export default function NotificationModal(props: InotificationModal) {
    
    return(
        <>
            {props.isOpen && (
            <>
                <ModalOverlay isOpen={props.isOpen} toggle={() => {}} />
                <StyledModal id="notification-modal">
                <p>{props.message}</p>
                </StyledModal>
            </>
            )}
        </>
    )
}