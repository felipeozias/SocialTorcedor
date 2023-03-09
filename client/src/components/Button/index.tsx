import { Btn } from "./style";

interface IProps {
    children: string;
}

export default function Button({ children }: IProps): JSX.Element {
    return <Btn>{children}</Btn>;
}
