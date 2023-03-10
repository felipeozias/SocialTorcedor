import { ReactNode } from "react";

export interface Imodal {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export interface InotificationModal extends Imodal {
    message: string
}