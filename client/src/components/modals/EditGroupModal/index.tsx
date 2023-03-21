import { ChangeEvent, useEffect, useState } from "react";
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
    InputFile,
    LabelFile,
    Img,
    ButtonAdd,
} from "./styles";
import { IUser } from "../../../interfaces/Users";
import { apiRequestUsers } from "../../../database";
import NotificationModal from "../NotificationModal";
import logoDefault from "../../../assets/logo.png"
import { updateGroupService } from "../../../services/editGroup";

let usersAdded: string[] = [];

export default function EditGroupModal(props: IEditModal) {
    let [fileUrl, setFileUrl] = useState(props.group?.pathImage!);
    let [groupName, setGroupName] = useState("");
    let [isOpen, setIsOpen] = useState(false);
    let [notifMessage, setNotifMessage] = useState("");
    let [usersDb, setUsersDb] = useState([] as IUser[]);
    // let [usersAdded, setUsersAdded] = useState(props.group?.members);

    props.group?.members.map(user => {
        if (usersAdded.includes(user._id)) {
            // console.log("a")
        } else {
            usersAdded.push(user._id)
        }
    })

    function changeImg(e: ChangeEvent) {
        let event = e.target as HTMLInputElement;
        if (event.files && event.files[0]) {
            setFileUrl(URL.createObjectURL(event.files[0]));
        }
        // console.log(event.files);
    }
    
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
                            admin: props.group?.admin._id!,
                            groupId: props.group?._id!,
                            title: groupName == "" ? props.group?.title! : groupName,
                            members: usersAdded,
                            photo: props.group?.pathImage
                        }
                        // console.log(sendUpdateGroup)
                        // console.log(props.group?.pathImage)
                        // console.log(fileUrl)

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
                        {/* <LabelFile htmlFor="fileImage">
                                Selecionar Imagem{" "}
                            </LabelFile>
                            <InputFile
                                id="fileImage"
                                name="photo"
                                type="file"
                                accept="image/*"
                                onChange={changeImg}
                            />
                            <Img src={props.group?.pathImage == undefined ? logoDefault : `${process.env.REACT_APP_API}assets/${fileUrl}`} alt="preview image" /> */}
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