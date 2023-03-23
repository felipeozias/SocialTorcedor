import { getCookie } from "../utils/cookies";

export default async function exitGroup(userData: {
    groupId: string | undefined;
    userId: string;
}) {
    try {
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: getCookie("token") as string,
            },
        };

        const url: string =
            `${process.env.REACT_APP_GROUP_LOCAL}/${userData.groupId}/members/${userData.userId}` as string;
        const res = await fetch(url, options);

        if (!res.ok) {
            console.error("Erro ao fazer requisição", await res.json());
            return { status: res.status };
        }

        const data = await res.json();

        return { status: res.status, data: data };
    } catch (err) {
        alert(
            "Houve um erro ao tentar sair do grupo. Por favor tente novamente!"
        );
        console.error(err);
    }
}
