import { BoxChild, BoxLogo, Logo, NameLogo, Template } from "./style";
import ImageLogo from "../../assets/logo.png";

interface IProps {
    title: string;
    children: JSX.Element;
}

export default function TemplateLogin(props: IProps): JSX.Element {
    return (
        <Template>
            <BoxLogo>
                <Logo image={ImageLogo} />
                <NameLogo>Social Torcedor</NameLogo>
            </BoxLogo>
            <BoxChild>{props.children}</BoxChild>
        </Template>
    );
}
