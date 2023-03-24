import { connect } from "./socket";

export default async function loginService(formData: any) {
    /*  const socket = connect();
    socket.disconnect(); */

    try {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        };

        const url: string = process.env.REACT_APP_LOGIN as string;
        const res = await fetch(url, options);

        if (!res.ok) {
            if (res.status === 401)
                return { auth: false, isNoAuth: true, status: res.status };

            console.error("Erro ao fazer requisição", await res.json());
            return { auth: false, isNoAuth: false, status: res.status };
        }

        const data = await res.json();
        document.cookie =
            "token=; expires=" + new Date(2010, 0, 1) + "; path=/";

        document.cookie = `token=${data.token}; expires=${new Date(
            new Date().getTime() + 24 * 60 * 60 * 1000
        )}; path=/;`;

        return { auth: true, status: res.status, data: data };
    } catch (err) {
        /// Lembrar de fazer alguma pagina de erro
        alert("Houve um erro ao entrar. Tente novamente!");
        console.error(err);
    }
}
