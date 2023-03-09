import { StyledInputName } from "../GroupModal/styles";
import { useEffect } from "react";

export const simulateDb = [
    {user: "user1"},
    {user: "user2"},
    {user: "Rodrigo Alves"},
    {user: "Leo p"},
    {user: "Ednilza mara de araujo"},
    {user: "augusto 22"},
]

function createDataOptions() {
    let list = document.querySelector("#user-list");
    // console.log(list)
    simulateDb.forEach(el => {
        let option = document.createElement('option');
        option.value = el.user
        list?.appendChild(option);
        // console.log(el.user)
    });
}


export default function DataList() {
    useEffect(() => {
        createDataOptions()
    }, []);

    return (
        <div>
            <StyledInputName id="user-list-input" list="user-list" placeholder="Usuários"/>
            <datalist id="user-list">
                
            </datalist>
        </div>
    )
}