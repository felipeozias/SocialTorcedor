import { Btn } from "./style";

interface IProps {
    children: string;
    click?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
}

export default function Button(props: IProps): JSX.Element {
    return (
        <Btn onClick={props.click} type={props.type}>
            {props.children}
        </Btn>
    );
}
