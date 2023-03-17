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
import { apiRequestUsers } from "../../../database";
import Context from "../../../hooks/useContext";
import { IUser } from "../../../interfaces/Users";
import createGroup from "../../../services/createGroup";
import { IRegisterGroup } from "../../../interfaces/Groups";
import { simulateLogin, simulateLogin2 } from "../../../database";

let usersAdded: Array<string> = [];

export default function GroupModal(props: Imodal) {
    let [fileUrl, setFileUrl] = useState("");
    let [isOpen, setIsOpen] = useState(false);
    let [notifMessage, setNotifMessage] = useState("");
    let [usersDb, setUsersDb] = useState([] as IUser[]);
    let [groupName, setGroupName] = useState("");

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
        let userNick = ""
        let userId = ""
        if (user.value != "") {
            let userDivide = user.value.split("(");
            if (userDivide.length > 1) {
                userNick = userDivide[1].replace(")", "")
                if (usersDb.some((userList) => userList.nickname === `${userNick}`) === true) {
                    let userObj = usersDb.filter(name => name.nickname.includes(userNick))
                    userId = userObj[0]._id
                }
                console.log(userNick)
                console.log(userId)
            } else {
                userNick = user.value
            }
        }
        if (userNick === "") {
            // console.log("String vazia...");
            setNotifMessage("Campo vazio, digite/escolha um usuário...");
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        } else if (usersAdded.includes(userId)) {
            // console.log(`Usuário: ${user.value} já adicionado!`);
            setNotifMessage(`Usuário: "${user.value}" já adicionado!`);
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        } else if (
            usersDb.some(
                (userList) => userList.nickname === `${userNick}`
            ) === false
        ) {
            // console.log(`Usuário: ${user.value} inexistente...`);
            setNotifMessage(`Usuário: "${user.value}" inexistente...`);
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        } else {
            usersAdded.push(userId);
            // console.log(`${user.value} Adicionado com sucesso!`);
            user.value = "";
            setNotifMessage(`${user.value} Adicionado com sucesso!`);
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        }
        // console.log(usersAdded);
    }

    function updateValue() {
        let inputUser = document.querySelector("#input-name-group") as HTMLInputElement;
        setGroupName(inputUser.value)
    }

    return (
        <>
            {props.isOpen && (
                <Context.Provider value={""}>
                    <ModalOverlay isOpen={props.isOpen} toggle={() => {}} index={1001}/>
                    <NotificationModal
                        message={notifMessage}
                        isOpen={isOpen}
                        toggle={props.toggle}
                        index={0}
                    />
                    <StyledModal
                        onSubmit={(e) => {
                            
                            let sendGroupApi: IRegisterGroup = {
                                title: groupName,
                                admin: simulateLogin._id,
                                members: usersAdded
                            }
                            // console.log(sendGroupApi)
                            
                            createGroup(sendGroupApi);
                            
                            setNotifMessage(`Grupo criado com sucesso!`);
                            setIsOpen(true);
                            setTimeout(() => {
                                setIsOpen(false);
                                props.toggle();
                            }, 2000);

                            e.preventDefault();
                            usersAdded = [];
                        }}
                    >
                        <StyledSectionLeft>
                            <StyledInputName
                                id="input-name-group"
                                type="text"
                                placeholder="Nome"
                                minLength={5}
                                maxLength={20}
                                required
                                onChange={updateValue}
                            />
                            {/* <StyledTextArea
                                placeholder="Descrição do Grupo"
                                rows={4}
                                minLength={10}
                                maxLength={100}
                                // required
                            /> */}
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
                </Context.Provider>
            )}
        </>
    );
}