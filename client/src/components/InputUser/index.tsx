import { Input, LabelInput } from "./style";

interface IProps {
    children: string | JSX.Element | JSX.Element[];
    type: string;
}

export default function InputUser(props: IProps): JSX.Element {
    return (
        <LabelInput>
            {props.children}
            <Input type={props.type} />
        </LabelInput>
    );
}
