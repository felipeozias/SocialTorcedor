import { ContainerIcons, Icons, MessageFooter, StyledFooter } from "./styles";
import FacebookIcon from "../../assets/icon-facebook.png";
import InstagramIcon from "../../assets/icon-instagram.png";
import GmailIcon from "../../assets/icon-gmail.png";

export default function Footer() {
    return (
        <StyledFooter>
            <MessageFooter>
                © 2023 por Social Torcedores. Orgulhosamente criado pela equipe
                Devs Torcedores
            </MessageFooter>
            <ContainerIcons>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icons src={FacebookIcon} alt="Logo do Facebook"></Icons>
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icons src={InstagramIcon} alt="Logo do Instagram"></Icons>
                </a>
                <a
                    href="https://www.gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icons src={GmailIcon} alt="Logo do Instagram"></Icons>
                </a>
            </ContainerIcons>
        </StyledFooter>
    );
}
