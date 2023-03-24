import { getCookie } from "../utils/cookies";


export async function deleteGroupService(userData: {groupId: string}) {
    try {

        const url: string = `${process.env.REACT_APP_GROUP_LOCAL}/${userData.groupId}` as string;
        const options = {
            method: "DELETE",
            headers: {
                authorization: getCookie("token") as string,
            }
        }
        const res = await fetch(url, options);

        if (!res.ok) {
            console.error("Erro ao fazer requisição", await res.json());
            return { status: res.status };
        }

        const data = await res.json();

        return { status: res.status, data: data };
    } catch (err) {
        alert(
            "Houve um erro ao tentar deletar o grupo desejado. Por favor tente novamente!"
        );
        console.error(err);
    }
}