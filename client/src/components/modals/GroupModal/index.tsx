import { ChangeEvent, useState, useEffect, useContext } from "react";
import {
    StyledModal,
    StyledInputName,
    StyledUsersContainer,
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
import { ICreateGroupModal, Imodal } from "../../../interfaces/Modal";
import ModalOverlay from "../ModalOverlay";
import { apiRequestUsers } from "../../../database";
import Context from "../../../hooks/useContext";
import { IUser } from "../../../interfaces/Users";
import createGroup from "../../../services/createGroup";
import { IRegisterGroup } from "../../../interfaces/Groups";
import DataUserForHeader from "../../contexts/DataUserForHeader";
import logoDefault from "../../../assets/logo.png"

let usersAdded: Array<string> = [];
let usersAddedNick: string[] = [];

export default function GroupModal(props: ICreateGroupModal) {
    let [fileUrl, setFileUrl] = useState(logoDefault);
    let [isOpen, setIsOpen] = useState(false);
    let [notifMessage, setNotifMessage] = useState("");
    let [usersDb, setUsersDb] = useState([] as IUser[]);
    let [groupName, setGroupName] = useState("");
    const { id } = useContext(DataUserForHeader);
    const userId = id.toString();

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
        
    }, [props.isOpen]);

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
            } else {
                userNick = user.value
            }
        }
        if (userNick === "") {
            setNotifMessage("Campo vazio, digite/escolha um usuário...");
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        } else if (usersAdded.includes(userId)) {
            setNotifMessage(`Usuário: "${user.value}" já adicionado!`);
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
            user.value = "";
        } else if (
            usersDb.some(
                (userList) => userList.nickname === `${userNick}`
            ) === false
        ) {
            setNotifMessage(`Usuário: "${user.value}" inexistente...`);
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
            user.value = "";
        } else {
            usersAdded.push(userId);
            usersAddedNick.push(userNick);
            setNotifMessage(`${user.value} Adicionado com sucesso!`);
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
            user.value = "";
        }
    }

    function updateValue() {
        let inputUser = document.querySelector("#input-name-group") as HTMLInputElement;
        setGroupName(inputUser.value)
    }

    function cancelCreation() {
        props.toggle();
        usersAdded = [];
        usersAddedNick = [];

        setFileUrl(logoDefault);
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
                        leftPosition={30}
                        bottomPosition={70}
                    />
                    <StyledModal id="forms"
                        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                            
                            const formData = new FormData(e.target as HTMLFormElement);
                            const data = Object.fromEntries(formData.entries());
                            
                            let sendGroupApi: IRegisterGroup = {
                                title: groupName,
                                admin: userId,
                                members: usersAdded,
                                photo: data["photo"]
                            }
                                                        
                            createGroup(sendGroupApi).then((res) => {
                                if (res?.status == 201) {
                                    setNotifMessage(`Grupo criado com sucesso!`);
                                    props.setChanged(true);
                                } else {
                                    setNotifMessage(`[ERRO]${res?.status}`);
                                }
                                setIsOpen(true);
                                setTimeout(() => {
                                setIsOpen(false);
                                props.toggle();
                                setFileUrl(logoDefault);
                                // props.setChanged(false);
                                }, 2000);
                            });
                            
                            e.preventDefault();
                            usersAdded = [];
                            usersAddedNick = [];
                        }}
                    >
                        <StyledSectionLeft>
                            <StyledInputName
                                id="input-name-group"
                                name="title"
                                type="text"
                                placeholder="Nome"
                                minLength={5}
                                maxLength={20}
                                required
                                onChange={updateValue}
                            />
                            <StyledUsersContainer>
                                {usersAddedNick.map(users => 
                                    <div>{users.toUpperCase()}</div>
                                )}
                            </StyledUsersContainer>
                            <DataList />
                            <StyledButton2
                                onClick={sendUserValue}
                                type="button"
                            >
                                {" "}
                                Adicionar{" "}
                            </StyledButton2>
                            <StyledButton2
                                onClick={cancelCreation}
                                type="button"
                            >
                                {" "}
                                Cancelar{" "}
                            </StyledButton2>
                        </StyledSectionLeft>
                        <StyledSectionRight>
                            <StyledLabelFile htmlFor="fileImage">
                                Selecionar Imagem{" "}
                            </StyledLabelFile>
                            <StyledInputFile
                                id="fileImage"
                                name="photo"
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