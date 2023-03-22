import { IUpdateGroup } from "../interfaces/Groups";
import { getCookie } from "../utils/cookies";

export async function editGroupService(userData: { groupId: string }) {
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

        return { status: res.status, data: data };
    } catch (err) {
        alert(
            "Houve um erro ao tentar buscar o grupo desejado. Por favor tente novamente!"
        );
        console.error(err);
    }
}

export async function updateGroupService(userData: IUpdateGroup) {
    try {
        const formData = new FormData();
        formData.append("admin", userData.admin);
        if (userData.members.length > 0) {
            for (let i = 0; i < userData.members.length; i++) {
                formData.append("members", userData.members[i]);
            }
        }
        formData.append("title", userData.title);
        formData.append("photo", userData.photo);

        const url: string =
            `${process.env.REACT_APP_GROUP_LOCAL}/${userData.groupId}` as string;
        const options = {
            method: "PATCH",
            headers: {
                authorization: getCookie("token") as string,
            },
            body: formData,
        };
        const res = await fetch(url, options);

        if (!res.ok) {
            console.error("Erro ao fazer requisição", await res.json());
            return { status: res.status };
        }

        const data = await res.json();

        return { status: res.status, data: data };
    } catch (err) {
        alert("Houve um erro ao tentar atualizar. Por favor tente novamente!");
        console.error(err);
    }
}
