import { StyledInputName } from "../GroupModal/styles";
import { useEffect, useState, useContext } from "react";
import { apiRequestUsers } from "../../../database";
import { IUser } from "../../../interfaces/Users"; 
import DataUserForHeader from "../../contexts/DataUserForHeader";

export default function DataList() {
    let [users, setUsers] = useState([] as IUser[]);
    let [reqSuccess, setReqSuccess] = useState(false);

    const { nickname } = useContext(DataUserForHeader);
    const userNickname = nickname.toString();

    async function requestDb() {
        let res = await apiRequestUsers()
        if (res.succesfull) {
            setUsers(res.data);
            setReqSuccess(res.succesfull);
        }
    }

    async function createDataOptions() {
        let list = document.querySelector("#user-list");
        // console.log(list)
        users.forEach(el => {
            if (el.nickname != userNickname) {
                let option = document.createElement('option');
                option.value = `${el.name} (${el.nickname})`
                list?.appendChild(option);
            }
            // let option = document.createElement('option');
            //     option.value = `${el.name} (${el.nickname})`
            //     list?.appendChild(option);
            // console.log(el)
        });
    }

    useEffect(() => {
        requestDb();
        createDataOptions();
    }, [reqSuccess]);

    return (
        <div>
            <StyledInputName id="user-list-input" list="user-list" placeholder="Usuários"/>
            <datalist id="user-list">
                
            </datalist>
        </div>
    )
}