import { IUpdateGroup } from "../interfaces/Groups";
import { getCookie } from "../utils/cookies";

export async function editGroupService(userData: { groupId: string }) {
    // console.log(userData);
    try {
        const url: string =
            `${process.env.REACT_APP_GROUP_LOCAL}/${userData.groupId}` as string;
        const options = {
            method: "GET",
            headers: {
                authorization: getCookie("token") as string,
            },
        };
        const res = await fetch(url, options);

        if (!res.ok) {
            console.error("Erro ao fazer requisição", await res.json());
            return { status: res.status };
        }

        const data = await res.json();
        console.log(data);

        return { status: res.status, data: data };
    } catch (err) {
        alert(
            "Houve um erro ao tentar buscar o grupo desejado. Por favor tente novamente!"
        );
        console.error(err);
    }
}

export async function updateGroupService(userData: IUpdateGroup) {
    console.log(userData);

    try {
        const formData = new FormData();
        formData.append("admin", userData.admin);
        formData.append("members", userData.members as any);
        formData.append("title", userData.title);
        console.log(formData);

        const url: string =
            `${process.env.REACT_APP_GROUP_LOCAL}/${userData.groupId}` as string;
        const options = {
            method: "PATCH",
            headers: {
                authorization: getCookie("token") as string,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const res = await fetch(url, options);

        if (!res.ok) {
            console.error("Erro ao fazer requisição", await res.json());
            return { status: res.status };
        }

        const data = await res.json();
        console.log(data);

        return { status: res.status, data: data };
    } catch (err) {
        alert("Houve um erro ao tentar atualizar. Por favor tente novamente!");
        console.error(err);
    }
}
