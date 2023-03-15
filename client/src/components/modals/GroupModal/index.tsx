import { ChangeEvent, useState, useEffect } from "react";
import {
    StyledModal,
    StyledInputName,
    StyledTextArea,
    StyledSectionLeft,
    StyledSectionRight,
    StyledInputFile,
    StyledLabelFile,
    StyledButton,
    StyledImg,
    StyledButton2,
} from "./styles";
import DataList from "../DataList";
import NotificationModal from "../NotificationModal";
import { Imodal } from "../../../interfaces/Modal";
import ModalOverlay from "../ModalOverlay";
import { IUser, apiRequestUsers } from "../../../database";

let usersAdded: Array<string> = [];

export default function GroupModal(props: Imodal) {
    let [fileUrl, setFileUrl] = useState("");
    let [isOpen, setIsOpen] = useState(false);
    let [notifMessage, setNotifMessage] = useState("");
    let [usersDb, setUsersDb] = useState([] as IUser[])

    function changeImg(e: ChangeEvent) {
        let event = e.target as HTMLInputElement;
        if (event.files && event.files[0]) {
            setFileUrl(URL.createObjectURL(event.files[0]));
        }
    }

    async function requestDb() {
        let res = await apiRequestUsers()
        if (res.succesfull) {
            setUsersDb(res.data);
            // setReqSuccess(res.succesfull);
        }
    }

    useEffect(() => {
        requestDb();
    }, []);

    function sendUserValue() {
        let user = document.querySelector(
            "#user-list-input"
        ) as HTMLInputElement;

        if (user.value === "") {
            // console.log("String vazia...");
            setNotifMessage("Campo vazio, digite/escolha um usuário...");
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        } else if (usersAdded.includes(user.value)) {
            // console.log(`Usuário: ${user.value} já adicionado!`);
            setNotifMessage(`Usuário: "${user.value}" já adicionado!`);
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        } else if (
            usersDb.some(
                (userList) => userList.name === `${user.value}`
            ) === false
        ) {
            // console.log(`Usuário: ${user.value} inexistente...`);
            setNotifMessage(`Usuário: "${user.value}" inexistente...`);
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        } else {
            usersAdded.push(user.value);
            // console.log(`${user.value} Adicionado com sucesso!`);
            user.value = "";
            setNotifMessage(`${user.value} Adicionado com sucesso!`);
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        }
        console.log(usersAdded);
    }

    return (
        <>
            {props.isOpen && (
                <>
                    <ModalOverlay isOpen={props.isOpen} toggle={() => {}} />
                    <NotificationModal
                        message={notifMessage}
                        isOpen={isOpen}
                        toggle={props.toggle}
                    />
                    <StyledModal
                        onSubmit={(e) => {
                            usersAdded = [];
                            setNotifMessage(`Grupo criado com sucesso!`);
                            setIsOpen(true);
                            setTimeout(() => {
                                setIsOpen(false);
                                props.toggle();
                            }, 2000);
                            e.preventDefault();
                        }}
                    >
                        <StyledSectionLeft>
                            <StyledInputName
                                type="text"
                                placeholder="Nome"
                                required
                            />
                            <StyledTextArea
                                placeholder="Descrição do Grupo"
                                rows={4}
                                maxLength={100}
                                required
                            />
                            <DataList />
                            <StyledButton2
                                onClick={sendUserValue}
                                type="button"
                            >
                                {" "}
                                Adicionar{" "}
                            </StyledButton2>
                        </StyledSectionLeft>
                        <StyledSectionRight>
                            <StyledLabelFile htmlFor="fileImage">
                                Selecionar Imagem{" "}
                            </StyledLabelFile>
                            <StyledInputFile
                                id="fileImage"
                                type="file"
                                accept="image/*"
                                onChange={changeImg}
                            />
                            <StyledImg src={fileUrl} alt="preview image" />
                            <StyledButton type="submit"> Criar </StyledButton>
                        </StyledSectionRight>
                    </StyledModal>
                </>
            )}
        </>
    );
}
