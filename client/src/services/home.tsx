import { getCookie } from "../utils/cookies";

export async function homeService() {
    try {
        const options = {
            method: "GET",
            headers: {
                authorization: getCookie("token") as string,
            },
        };

        const url: string = process.env.REACT_APP_USER_ME as string;
        const res = await fetch(url, options);

        if (!res.ok) {
            console.error("Erro ao fazer requisição", await res.json());
            return {
                auth: false,
                isNoAuth: false,
                status: res.status,
                data: null,
            };
        }

        const data = await res.json();
        const id = data._id;

        const option = {
            method: "GET",
            headers: {
                authorization: getCookie("token") as string,
            },
        };

        const urlUser: string = `${process.env.REACT_APP_API}/users/${id}`;
        const response = await fetch(urlUser, option);

        if (!res.ok) {
            console.error("Erro ao fazer requisição", await res.json());
            return {
                auth: false,
                isNoAuth: false,
                status: res.status,
                data: null,
            };
        }

        const dataF = await response.json();

        return {
            auth: true,
            isNoAuth: true,
            status: response.status,
            data: dataF.data,
        };
    } catch (err) {
        alert("Houve um erro ao entrar. Tente novamente!");
        console.error(err);
        return { auth: false, isNoAuth: false, status: 500, data: [] };
    }
}
