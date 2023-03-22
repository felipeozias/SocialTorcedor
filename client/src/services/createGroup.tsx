import { IRegisterGroup } from "../interfaces/Groups";
import { getCookie } from "../utils/cookies";

export default async function createGroup(userData: IRegisterGroup) {
    console.log(userData);

    const formData = new FormData();
    // console.log(formData)
    formData.append("admin", userData.admin);
    formData.append("title", userData.title);
    if (userData.members.length > 0) {
        formData.append("members", userData.members as any);
    }
    formData.append("photo", userData.photo);

    try {
        const options = {
            method: "POST",
            headers: {
                authorization: getCookie("token") as string,
            },
            body: formData,
        };

        const url: string = process.env.REACT_APP_GROUP_LOCAL as string;
        const res = await fetch(url, options);

        if (!res.ok) {
            console.error("Erro ao fazer requisição", await res.json());
            return { status: res.status };
        }

        const data = await res.json();

        return { status: res.status, data: data };
    } catch (err) {
        alert("Houve um erro ao criar o grupo. Por favor tente novamente!");
        console.error(err);
    }
}
