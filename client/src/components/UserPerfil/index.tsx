import { StyledContainer } from "./styles";
import IconImage from "../ImagePerfil";
import PerfilNameEmail from "../PerfilNameEmail";

//------ Using context ------
import { useContext } from "react";
import DataUserForHeader from "../contexts/DataUserForHeader";

export default function IconAndEmail() {
    const { logo, alt, name, email } = useContext(DataUserForHeader);

    return (
        <StyledContainer>
            <IconImage src={logo.toString()} alt={alt.toString()} />
            <PerfilNameEmail name={name.toString()} email={email.toString()} />
        </StyledContainer>
    )
}
