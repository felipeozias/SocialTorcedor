import { getToken } from "../utils/cookies";

export async function editGroupService(userData: { groupId: string }) {
    // console.log(userData);
    try {
        const url: string =
            `${process.env.REACT_APP_GROUP_LOCAL}/${userData.groupId}` as string;
        const options = {
            method: "GET",
            headers: {
                authorization: getToken || "",
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

export async function updateGroupService(userData: any) {
    // console.log(userData);
    try {
        const url: string =
            `${process.env.REACT_APP_GROUP_LOCAL}/${userData.groupId}` as string;
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: getToken || "",
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
