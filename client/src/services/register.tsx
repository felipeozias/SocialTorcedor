/// Lembrar de fazer alguma pagina de erro

import { getToken } from "../utils/cookies";

export default async function registerService(userData: any) {
    try {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        };

        const url: string = process.env.REACT_APP_REGISTER as string;
        const res = await fetch(url, options);

        if (!res.ok) {
            console.error("Erro ao fazer requisição", await res.json());
            return { auth: false, isNoAuth: true, status: res.status };
        }

        const data = await res.json();

        document.cookie =
            "token=; expires=" + new Date(2010, 0, 1) + "; path=/";

        console.log("O token no cadastrar => ", getToken);

        document.cookie = `token=${data.token}; expires=${new Date(
            new Date().getTime() + 24 * 60 * 60 * 1000
        )}; path=/;`;
        console.log(data);

        return { auth: true, status: res.status, data: data };
    } catch (err) {
        /// Lembrar de fazer alguma pagina de erro
        alert(
            "Houve um erro ao realizar o cadastro. Por favor tente novamente!"
        );
        console.error(err);
    }
}
