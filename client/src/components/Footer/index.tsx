import { ContainerIcons, Icons, StyledFooter } from "./styles";
import FacebookIcon from "../../assets/icon-facebook.png";
import InstagramIcon from "../../assets/icon-instagram.png";
import GmailIcon from "../../assets/icon-gmail.png";

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                © 2023 por Social Torcedores. Orgulhosamente criado pela equipe
                Devs Torcedores
            </p>
            <ContainerIcons>
                <a href="https://www.facebook.com">
                    <Icons src={FacebookIcon} alt="Logo do Facebook"></Icons>
                </a>
                <a href="https://www.instagram.com">
                    <Icons src={InstagramIcon} alt="Logo do Instagram"></Icons>
                </a>
                <a href="https://www.gmail.com">
                    <Icons src={GmailIcon} alt="Logo do Instagram"></Icons>
                </a>
            </ContainerIcons>
        </StyledFooter>
    );
}
