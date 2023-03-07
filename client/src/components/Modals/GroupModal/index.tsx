import { ChangeEvent, useState } from "react";
import { StyledModal, StyledInputName, StyledTextArea, StyledSectionLeft, StyledSectionRight, StyledInputFile, StyledLabelFile, StyledButton, StyledImg } from "./styles";

export default function GroupModal() {
    let [fileUrl, setFileUrl] = useState("");
    
    function changeImg(e: ChangeEvent) {
        let event = e.target as HTMLInputElement
        if (event.files && event.files[0]) {
            setFileUrl(URL.createObjectURL(event.files[0]))
        }
    }

    return (
        <StyledModal onSubmit={ (e) => {
            e.preventDefault();
        }}>
            <StyledSectionLeft>
                <StyledInputName type="text" placeholder="Nome" required/>
                <StyledTextArea placeholder="Descrição do Grupo" rows={8} maxLength={100} required/>
            </StyledSectionLeft>
            <StyledSectionRight>
                <StyledLabelFile htmlFor="fileImage">Selecionar Imagem </StyledLabelFile>
                <StyledInputFile id="fileImage" type="file" accept="image/*" onChange={changeImg}/>
                <StyledImg src={fileUrl} alt="preview image"/>
                <StyledButton type="submit"> Criar </StyledButton>
            </StyledSectionRight>
        </StyledModal>
    )
}