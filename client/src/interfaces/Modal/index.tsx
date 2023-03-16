import { ReactNode } from "react";

export interface Imodal {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    index: number
}

export interface InotificationModal extends Imodal {
    message: string
}