import { LogoExpand, StyledContainer } from "./styles";
import IconImage from "../ImagePerfil";
import PerfilNameEmail from "../PerfilNameEmail";
import ExpandSvg from "../../assets/expand-set.png";
import CloseMenuImg from "../../assets/close-set.png";

//------ Using context ------
import { useContext, useState } from "react";
import DataUserForHeader from "../contexts/DataUserForHeader";
import MenuHeader from "../MenuHeader";

export default function IconAndEmail() {
    const { logo, alt, name, nickname } = useContext(DataUserForHeader);
    const [menu, setMenu] = useState(false);

    function showModal() {
        setMenu(menu === false);
    }

    return (
        <StyledContainer onClick={showModal}>
            <IconImage src={logo.toString()} alt={alt.toString()} />
            <PerfilNameEmail
                name={name.toString()}
                nickname={nickname.toString()}
            />
            <LogoExpand src={!menu ? ExpandSvg : CloseMenuImg} />
            {menu && <MenuHeader />}
        </StyledContainer>
    );
}
