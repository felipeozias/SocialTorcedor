import { getCookie } from "../utils/cookies";

export async function homeService() {
    try {
        const options = {
            method: "GET",
            headers: {
                authorization: getCookie("token") || "",
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

        return { auth: true, isNoAuth: true, status: res.status, data: data };
    } catch (err) {
        /// Lembrar de fazer alguma pagina de erro
        alert("Houve um erro ao entrar. Tente novamente!");
        console.error(err);
        return { auth: false, isNoAuth: false, status: 500 };
    }
}
