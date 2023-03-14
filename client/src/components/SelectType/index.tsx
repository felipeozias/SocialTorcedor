import { LabelInput, Select } from "./style";

interface IProps {
    name?: string;
    validates?: any;
}

export default function SelectType(props: IProps): JSX.Element {
    return (
        <LabelInput>
            <label>Time do coração:</label>
            <Select
                name={props.name}
                {...props.validates}
                defaultValue="Flamengo"
            >
                <option value={"Flamengo"}>Flamengo</option>
                <option value={"Corinthians"}>Corintians</option>
                <option value={"Outro"}>Outro</option>
            </Select>
        </LabelInput>
    );
}
