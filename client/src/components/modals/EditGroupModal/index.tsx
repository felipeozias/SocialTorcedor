import { useEffect, useState } from "react";
import { IGetGroups, IUpdateGroup } from "../../../interfaces/Groups";
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
import { updateGroupService } from "../../../services/editGroup";
import exitGroup from "../../../services/exitGroup";

let usersAdded: string[] = [];

export default function EditGroupModal(props: IEditModal) {
    let [groupName, setGroupName] = useState("");
    let [isOpen, setIsOpen] = useState(false);
    let [notifMessage, setNotifMessage] = useState("");
    let [usersDb, setUsersDb] = useState([] as IUser[]);
    let [render, setRender] = useState(0);
    // let [usersAdded, setUsersAdded] = useState(props.group?.members);

    props.group?.members.map(user => {
        if (usersAdded.includes(user._id)) {
            // console.log("a")
        } else {
            usersAdded.push(user._id)
        }
    })
    
    function updateValue() {
        let inputUser = document.querySelector("#input-name-group") as HTMLInputElement;
        setGroupName(inputUser.value)
        console.log(groupName)
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
            user.value = "";
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
            user.value = "";
        } else {
            usersAdded.push(userId);
            // console.log(`${user.value} Adicionado com sucesso!`);
            setNotifMessage(`${user.value} Adicionado com sucesso!`);
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
            user.value = "";
        }
        // console.log(usersAdded);
    }

    function cancelUpdateGroupTemp() {
        props.toggle();
        usersAdded = [];
    }

    return (
        <>
            {props.isOpen && (
                <>
                    <ModalOverlay isOpen={props.isOpen} toggle={() => {}} index={1001}/>
                    <ModalContainer onClick={() => {
                        // console.log(usersAdded)
                    }}
                        onSubmit={(event) => {

                        let sendUpdateGroup: IUpdateGroup= {
                            admin: props.group?.admin._id,
                            groupId: props.group?._id,
                            title: groupName == "" ? props.group?.title: groupName,
                            members: usersAdded,
                        }
                        console.log(sendUpdateGroup)
                        // console.log(groupName)

                        updateGroupService(sendUpdateGroup);
                            
                        setNotifMessage(`Grupo atualizado com sucesso!`);
                        setIsOpen(true);
                        setTimeout(() => {
                            setIsOpen(false);
                            props.toggle();
                        }, 2000);

                        event.preventDefault();
                        usersAdded = [];
                    }}>
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
                                onChange={updateValue}
                            />
                            <UsersContainer>
                                {/* <div>{
                                props.group?.members.map(users => 
                                <div>
                                    {users.name}({users.nickname}) 
                                <div onClick={() => {
                                    const index = usersAdded.indexOf(users._id);
                                    if (index > -1) {
                                        usersAdded.splice(index,1);
                                    }
                                    console.log("sair")
                                    // setNotifMessage(`Usuário ${users.nickname} removido`);
                                    // setIsOpen(true);
                                    // setTimeout(() => {
                                    //     setIsOpen(false);
                                    //     // props.toggle();
                                    // }, 1500);
                                }}>(X)</div>
                                </div>)
                                
                                }
                                </div> */}
                                <div>
                                {
                                usersAdded.map(users => usersDb.map(userlist => <div>{userlist._id.includes(users) ? `${userlist.name} (${userlist.nickname})`: ""}</div>))
                                }
                                </div>
                            </UsersContainer>
                            <DataList />
                            <ButtonAdd 
                                onClick={updateGroupTemp}
                                type="button"
                            >
                                Adicionar
                            </ButtonAdd>
                            <ButtonAdd 
                                onClick={cancelUpdateGroupTemp}
                                type="button"
                            >
                                Cancelar
                            </ButtonAdd>
                        </SectionLeft>
                        <SectionRight>
                        <ButtonAdd 
                                type="submit"
                            >
                                Atualizar Grupo
                            </ButtonAdd>
                        </SectionRight>
                    </ModalContainer>
                </>
            )}
        </>
    )
}