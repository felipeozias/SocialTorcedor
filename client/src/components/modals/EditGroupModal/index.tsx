import { useEffect, useState } from "react";
import { IGetGroups } from "../../../interfaces/Groups";
import { IEditModal } from "../../../interfaces/Modal";
import ModalOverlay from "../ModalOverlay";
import DataList from "../DataList";
import {
    ModalContainer,
    InputName,
    UsersContainer,
    SectionLeft,
    SectionRight,
    StyledInputFile,
    StyledLabelFile,
    StyledButton,
    StyledImg,
    ButtonAdd,
} from "./styles";
import { IUser } from "../../../interfaces/Users";
import { apiRequestUsers } from "../../../database";
import NotificationModal from "../NotificationModal";

export default function EditGroupModal(props: IEditModal) {
    let [groupName, setGroupName] = useState("");
    let [isOpen, setIsOpen] = useState(false);
    let [notifMessage, setNotifMessage] = useState("");
    let [usersDb, setUsersDb] = useState([] as IUser[]);
    // let [usersAdded, setUsersAdded] = useState(props.group?.members);
    let usersAdded: string[] = [];
    props.group?.members.map(user => usersAdded.push(user._id))
    function updateValue() {
        let inputUser = document.querySelector("#input-name-group") as HTMLInputElement;
        setGroupName(inputUser.value)
    }

    function closeModal() {
        // props.toggle()
        // usersAdded.push("a")
        console.log(usersAdded)
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

    function updateGroupTemp() {
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

    return (
        <>
            {props.isOpen && (
                <>
                    <ModalOverlay isOpen={props.isOpen} toggle={() => {}} index={1001}/>
                    <ModalContainer onClick={closeModal}>
                    <NotificationModal
                        message={notifMessage}
                        isOpen={isOpen}
                        toggle={props.toggle}
                        index={0}
                        leftPosition={10}
                        bottomPosition={45}
                    />
                        <SectionLeft>
                            <InputName 
                                id="input-name-group"
                                type="text"
                                placeholder={props.group?.title}
                                minLength={5}
                                maxLength={20}
                                required
                                onChange={updateValue}
                            />
                            <UsersContainer>

                            </UsersContainer>
                            <DataList />
                            <ButtonAdd 
                                onClick={updateGroupTemp}
                                type="button"
                            >
                                Adicionar
                            </ButtonAdd>
                        </SectionLeft>
                        <SectionRight>

                        </SectionRight>
                    </ModalContainer>
                </>
            )}
        </>
    )
}