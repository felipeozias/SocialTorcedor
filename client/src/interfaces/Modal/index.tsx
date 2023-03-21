import { ReactNode } from "react";
import { IGetGroups } from "../Groups/index"

export interface Imodal {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    index: number
}

export interface IEditModal {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    index: number;
    group: IGetGroups | undefined
}

export interface InotificationModal extends Imodal {
    message: string
    leftPosition: number
    bottomPosition: number
}