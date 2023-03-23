import { ReactNode } from "react";
import { IGetGroups } from "../Groups/index"

export interface Imodal {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    index: number;
}

export interface ICreateGroupModal extends Imodal {
    setChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IEditModal {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    index: number;
    group: IGetGroups | undefined;
    setChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface InotificationModal extends Imodal {
    message: string
    leftPosition: number
    bottomPosition: number
}