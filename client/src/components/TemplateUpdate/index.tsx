import { BoxChild, BoxLogo, Logo, NameLogo, Template, Arrow } from "./style";
import ImageLogo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";

interface IProps {
    children: JSX.Element;
    smallLogo: boolean;
}

export default function TemplateUpdate(props: IProps): JSX.Element {
    return (
        <Template>
            <BoxLogo>
                <Link to={"/home"}>
                    <Arrow image={arrow} small={props.smallLogo} />
                </Link>                                
                <NameLogo small={props.smallLogo}>Social Torcedor</NameLogo>
                <Logo image={ImageLogo} small={props.smallLogo} />
            </BoxLogo>
            <BoxChild>{props.children}</BoxChild>
        </Template>
    );
}
