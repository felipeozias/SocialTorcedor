import { StyledInputName } from "../GroupModal/styles";
import { useEffect, useState, useContext } from "react";
import { IUser, apiRequestUsers } from "../../../database";

function UseDb() {
    
}

export default function DataList() {
    let [users, setUsers] = useState([] as IUser[]);
    let [reqSuccess, setReqSuccess] = useState(false);

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
            let option = document.createElement('option');
            option.value = el.name
            list?.appendChild(option);
            // console.log(el.user)
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