import {StyledImg, StyledImgContainer, StyledInput, StyledInputContainer, 
    StyledP, StyledUserSection, UsersContainer} from "./styles";
import img from "../../assets/loupe.png";
import MainUsers from "../MainUsers";
import { useEffect, useState } from "react";
import { IUser, apiRequestUsers } from "../../database";

export default function MainUserSection(): JSX.Element {
    let [usersF, setUsersF] = useState([] as IUser[]);
    let [usersDb, setUsersDb] = useState([] as IUser[]);
    let [reqSuccess, setReqSuccess] = useState(false);

    console.log("a")

    async function requestDb() {
        let res = await apiRequestUsers()
        if (res.succesfull) {
            setUsersDb(res.data);
            setReqSuccess(res.succesfull);
        }
    }
    
    let userValue = ""
    let filteredArray: IUser[] = [];

    useEffect(() => {
        requestDb();
        testApi();
    },[reqSuccess]);

    function testApi() {
        let filteredUsers = usersDb.filter(users => users.name.toLowerCase().includes(`${userValue.toLowerCase()}`));
        
        for (let i=0; i < filteredUsers.length;i++) {
            if (filteredUsers[i] != undefined) {
                let tempObj = {name: filteredUsers[i].name, _id: filteredUsers[i]._id}
                filteredArray.push(tempObj)
            }
        }

        setUsersF(filteredArray);
        let inputUser = document.querySelector("#input-user") as HTMLInputElement;
        inputUser.value = ""
    }

    function updateValue() {
        let inputUser = document.querySelector("#input-user") as HTMLInputElement;
        userValue = inputUser.value
    }
    
    return (
        <StyledUserSection>
            <StyledP> Usuários </StyledP>
            <StyledInputContainer>
                <StyledInput id="input-user" type="text" placeholder='Usuários' onKeyUp={(e) => {if (e.key == "Enter") {testApi()}}} onChange={updateValue}/>
                <StyledImgContainer>
                    <StyledImg src={img} alt="loupe image" onClick={testApi}/>
                </StyledImgContainer>
            </StyledInputContainer>
            <UsersContainer>
                {(usersF.map((users) => (
                    <MainUsers
                        key={users._id} 
                        name={users.name} 
                    />
                )))}
            </UsersContainer>
        </StyledUserSection>
    )
}