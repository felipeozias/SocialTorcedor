import {
    Container,
    Img,
    P,
    P2,
    EditIcon,
    ExitIcon,
    DeleteIcon,
    ImgContainer,
    ImgContainer2,
    Pcontainer,
    Popup,
    Popup2,
    Popup3,
} from "./styles";
import exitIcon from "../../assets/exit.png";
import editIcon from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";
import { useContext, useState } from "react";
import DataUserForHeader from "../contexts/DataUserForHeader";
import Context from "../../hooks/useContext";
import exitGroup from "../../services/exitGroup";
import NotificationModal from "../modals/NotificationModal";
import EditGroupModal from "../modals/EditGroupModal";
import useModal from "../../hooks/useModal";
import { editGroupService } from "../../services/editGroup";
import { IGetGroups } from "../../interfaces/Groups";
import { deleteGroupService } from "../../services/deleteGroup";

interface Iprops {
    owner: string;
    adminName: string;
    groupName: string;
    groupId: string;
    textSize: number;
    displayEdit: string;
    displayExit: string;
    position: number;
    pathImage: string;
    setChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MainGroups(props: Iprops): JSX.Element {
    const { isOpen, toggle } = useModal();
    let [borderActive, setBorderActive] = useState("");
    let [isOpenExitIcon, setIsOpenExitIcon] = useState(false);
    let [isOpenDeleteIcon, setIsOpenDeleteIcon] = useState(false);
    let [isOpenEditIcon, setIsOpenEditIcon] = useState(false);
    let [isOpenNotif, setIsOpenNotif] = useState(false);
    let [notifMessage, setNotifMessage] = useState("");
    let [groupAtributes, setGroupAtributes] = useState<IGetGroups>();

    const { id } = useContext(DataUserForHeader);
    const userId = id.toString();

    function exit() {
        // console.log("Sair do grupo")
        const userData = {
            groupId: props.groupId,
            userId: userId,
        };
        // console.log(userData);
        // exitGroup(userData);
        setNotifMessage(`Saindo em 3..`);
        setIsOpenNotif(true);
        setTimeout(() => {
            // setIsOpenNotif(false);
            setNotifMessage(`Saindo em 3..2`);
        }, 1000);
        setTimeout(() => {
            // setIsOpenNotif(false);
            setNotifMessage(`Saindo em 3..2..1`);
        }, 2000);
        setTimeout(() => {
            // setIsOpenNotif(false);
            setNotifMessage(`Você saiu do grupo`);
            exitGroup(userData);
        }, 3000);
        setTimeout(() => {
            setIsOpenNotif(false);
        }, 4000);
    }
    async function editGroup() {
        let res = await editGroupService({ groupId: props.groupId });
        if (res?.status == 200) {
            setGroupAtributes(res.data["data"]);
        }
        toggle();
    }
    function activateBorder() {
        console.log("id do grupo", props.groupId);
        // setBorderActive("solid");
    }

    function deleteGroup() {
        // console.log("delete")
        // console.log(props.groupId);

        deleteGroupService({ groupId: props.groupId }).then((res) => {
            switch (res?.status) {
                case 200:
                    setNotifMessage(
                        `Grupo ${props.groupName} deletado com sucesso!`
                    );
                    setIsOpenNotif(true);
                    break;
                default:
                    setNotifMessage(`[ERRO ${res?.status}]`);
                    setIsOpenNotif(true);
                    break;
            }

            setTimeout(() => {
                setIsOpenNotif(false);
                props.setChanged(true);
            }, 1500);
        });
    }

    return (
        <Container border={borderActive}>
            <NotificationModal
                message={notifMessage}
                isOpen={isOpenNotif}
                toggle={() => {}}
                index={0}
                leftPosition={30}
                bottomPosition={70}
            />
            <EditGroupModal
                isOpen={isOpen}
                toggle={toggle}
                index={0}
                group={groupAtributes}
                setChanged={props.setChanged}
            />
            <ImgContainer>
                <Img src={props.pathImage} />
            </ImgContainer>
            <Pcontainer
                /* onClick={activateBorder} */ className="group-me-user"
                id={props.groupId}
            >
                <P textSize={props.textSize}> {props.groupName} </P>
                <P2> Criador : {
                props.adminName.split(" ").length == 1 ? 
                props.adminName.split(" ")[0] : 
                `${props.adminName.split(" ")[0]} ${props.adminName.split(" ")[1]}`
                }</P2>
            </Pcontainer>
            <ImgContainer2>
                {isOpenExitIcon && (
                    <Popup position={props.position}>Sair do Grupo</Popup>
                )}
                <ExitIcon
                    display={props.displayExit}
                    onMouseOut={() => {
                        setIsOpenExitIcon(false);
                    }}
                    onMouseEnter={() => {
                        setIsOpenExitIcon(true);
                    }}
                    src={exitIcon}
                    onClick={exit}
                />

                {isOpenEditIcon && (
                    <Popup2 position={props.position}>Editar Grupo</Popup2>
                )}
                <EditIcon
                    display={props.displayEdit}
                    onMouseOut={() => {
                        setIsOpenEditIcon(false);
                    }}
                    onMouseEnter={() => {
                        setIsOpenEditIcon(true);
                    }}
                    src={editIcon}
                    onClick={editGroup}
                />

                {isOpenDeleteIcon && (
                    <Popup3 position={props.position}>Deletar Grupo</Popup3>
                )}
                <DeleteIcon
                    display={props.displayEdit}
                    onMouseOut={() => {
                        setIsOpenDeleteIcon(false);
                    }}
                    onMouseEnter={() => {
                        setIsOpenDeleteIcon(true);
                    }}
                    src={deleteIcon}
                    onClick={deleteGroup}
                />
            </ImgContainer2>
        </Container>
    );
}
