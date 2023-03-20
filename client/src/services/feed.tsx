/// Lembrar de fazer alguma pagina de erro

import { getToken } from "../utils/cookies";

export async function fetchFeed() {
    try {
        const options = {
            method: "GET",
            headers: {
                authorization: getToken || "",
            },
        };

        const url: string = process.env.REACT_APP_FEED as string;
        const res = await fetch(url, options);

        if (!res.ok) {
            console.error("Erro ao fazer requisição", await res.json());
            return {
                failure: true,
                error: "Ocorreu um erro ao buscar os feeds",
                status: res.status,
            };
        }

        let data = (await res.json()).data;
        console.log(data);
        

        return data;
    } catch (err) {
        /// Lembrar de fazer alguma pagina de erro
        alert(
            "Houve um erro ao carregar os feeds. Tente novamente ou contacte um administrador!"
        );
        console.error(err);
    }
}

export async function postFeed(content: String) {
    try {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: `{"content":"${content}","author":"640ab68a27fea004b4b9ce05","pathImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeW-gyEUEq2lTJP_4i_gmk6vPUwe0qZSlESg&usqp=CAU"}`,
        };

        const url: string = process.env.REACT_APP_FEED_POST as string;
        const res = await fetch(url, options);

        if (!res.ok) {
            console.error("Erro ao fazer a publicação", await res.json());
            return {
                failure: true,
                error: "Ocorreu um erro ao fazer a publicação",
                status: res.status,
            };
        }

        let data = (await res.json()).data;
        alert("Publicação realizada com sucesso!");

        return data;
    } catch (err) {
        /// Lembrar de fazer alguma pagina de erro
        alert(
            "Houve um erro ao enviar a publicação. Tente novamente ou contacte um administrador!"
        );
        console.error(err);
    }
}
