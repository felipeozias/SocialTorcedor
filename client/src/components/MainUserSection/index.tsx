import {
    StyledImg,
    StyledImgContainer,
    StyledInput,
    StyledInputContainer,
    StyledP,
    StyledUserSection,
    UsersContainer,
} from "./styles";
import img from "../../assets/loupe.png";
import MainUsers from "../MainUsers";
import { useEffect, useState } from "react";
import { apiRequestUsers } from "../../database";
import { IUser } from "../../interfaces/Users";
import { useContext } from "react";
import DataUserForHeader from "../contexts/DataUserForHeader";
import { connect } from "../../services/socket"

export default function MainUserSection(): JSX.Element {
    let [usersF, setUsersF] = useState([] as IUser[]);
    let [usersDb, setUsersDb] = useState([] as IUser[]);
    let [reqSuccess, setReqSuccess] = useState(false);
    let [changed, setChanged] = useState(false);

    const { id } = useContext(DataUserForHeader);

    const socket = connect();

    socket.on("feed", (data : any) => {

        if (data["target"] == "user") {
            // console.log("alterou usuario")
            setChanged(true);
        }
    })

    const userId = id.toString();

    async function requestDb() {
        let res = await apiRequestUsers();
        if (res.succesfull) {
            setUsersDb(res.data);
            setReqSuccess(res.succesfull);
        }
    }

    let userValue = "";
    let filteredArray: IUser[] = [];

    useEffect(() => {
        requestDb();
        testApi();
    }, [reqSuccess]);

    useEffect(() => {
        requestDb();
        testApi();
        setTimeout(() => {
            setChanged(false);
        },1000)
    }, [changed])

    function testApi() {
        let removedSelf = usersDb.filter(
            (users) => users._id !== userId
        );
        let filteredUsers = removedSelf.filter((users) =>
            users.name.toLowerCase().includes(`${userValue.toLowerCase()}`)
        );

        for (let i = 0; i < filteredUsers.length; i++) {
            if (filteredUsers[i] !== undefined) {
                let tempObj = {
                    name: filteredUsers[i].name,
                    _id: filteredUsers[i]._id,
                    nickname: filteredUsers[i].nickname,
                    team: filteredUsers[i].team,
                    pathImage: filteredUsers[i].pathImage
                };
                filteredArray.push(tempObj);
            }
        }

        setUsersF(filteredArray);
        let inputUser = document.querySelector(
            "#input-user"
        ) as HTMLInputElement;
        inputUser.value = "";
    }

    function updateValue() {
        let inputUser = document.querySelector(
            "#input-user"
        ) as HTMLInputElement;
        userValue = inputUser.value;
    }

    return (
        <StyledUserSection>
            <StyledP> Usuários </StyledP>
            <StyledInputContainer>
                <StyledInput
                    id="input-user"
                    type="text"
                    placeholder="Usuários"
                    onKeyUp={(e) => {
                        if (e.key === "Enter") {
                            testApi();
                        }
                    }}
                    onChange={updateValue}
                />
                <StyledImgContainer>
                    <StyledImg src={img} alt="loupe image" onClick={testApi} />
                </StyledImgContainer>
            </StyledInputContainer>
            <UsersContainer>
                {usersF.map((users) => (
                    <MainUsers
                    key={users._id} 
                    name={users.name.split(" ")[0]}
                    nickname={users.nickname} 
                    teamUrl={users.pathImage == undefined ? `${users.team.toLowerCase()}.png` : users.pathImage}/>
                ))}
            </UsersContainer>
        </StyledUserSection>
    );
}
