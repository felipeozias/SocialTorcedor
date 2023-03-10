import { LabelInput, Select } from "./style";

export default function SelectType(): JSX.Element {
    return (
        <LabelInput>
           <label>Time do coração:</label>
           <Select>
                <option>Flamengo</option>
                <option>Corintians</option>
                <option>outro</option>
           </Select>
        </LabelInput>
    );
}
