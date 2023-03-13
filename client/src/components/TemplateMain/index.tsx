import { BoxChild, BoxLogo, Logo, NameLogo, Template } from "./style";
import ImageLogo from "../../assets/logo.png";

interface IProps {
    children: JSX.Element;
    smallLogo: boolean;
}

export default function TemplateMain(props: IProps): JSX.Element {
    return (
        <Template>
            <BoxLogo>
                <Logo image={ImageLogo} small={props.smallLogo} />
                <NameLogo small={props.smallLogo}>Social Torcedor</NameLogo>
            </BoxLogo>
            <BoxChild>{props.children}</BoxChild>
        </Template>
    );
}
