import { Logo, Template, Title } from "./style";
import ImageLogo from "../../assets/logo.png";

interface IProps {
    title: string;
    children: JSX.Element;
}

export default function TemplateLogin(props: IProps): JSX.Element {
    return (
        <Template>
            <Logo image={ImageLogo} />
            <Title>{props.title}</Title>
            {props.children}
        </Template>
    );
}
