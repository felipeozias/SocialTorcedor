/// Lembrar de fazer alguma pagina de erro
import { getCookie } from "../utils/cookies";

export async function fetchFeed() {

    try {
        const options = {
            method: "GET",
            headers: {
                authorization: getCookie("token") as string,
            },
        };

        const url: string = process.env.REACT_APP_FEED as string;
        const res = await fetch(url, options);

        if (!res.ok) {
            // console.error("Erro ao fazer requisição", await res.json());
            return {
                failure: true,
                error: "Ocorreu um erro ao buscar os feeds",
                status: res.status,
            };
        }

        let data = (await res.json()).data;

        return data;
    } catch (err) {
        /// Lembrar de fazer alguma pagina de erro
        alert(
            "Houve um erro ao carregar os feeds. Tente novamente ou contacte um administrador!"
        );
        console.error(err);
    }
}

export async function postFeed(content: string, image: any, userId: string) {

    try {
        const formData = new FormData();

        formData.append("content", `${content}`);
        formData.append("author", `${userId}`);
        formData.append("photo", image);

        const options = {
            method: "POST",
            headers: {
                authorization: getCookie("token") as string
            },
            body: formData
        };

        const res = await fetch(`${process.env.REACT_APP_API}/posts`, options);

        if (!res.ok) {
            console.error("Erro ao fazer a publicação", await res.json());
            return {
                failure: true,
                error: "Ocorreu um erro ao fazer a publicação",
                status: res.status,
            };
        }

        let data = (await res.json()).data;
        // alert("Publicação realizada com sucesso!");

        return { failure: false, data };
    } catch (err) {
        /// Lembrar de fazer alguma pagina de erro
        alert(
            "Houve um erro ao enviar a publicação. Tente novamente ou contacte um administrador!"
        );
        console.error(err);
    }
}

export async function postCommentFeed(content: string, userId: string, postId: string) {

    try {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: getCookie("token") as string
            },
            body: `{"content":"${content}","author":"${userId}"}`
        };

        const res = await fetch(`${process.env.REACT_APP_API}/posts/${postId}/comments`, options);

        if (!res.ok) {
            console.error("Erro ao fazer comentário", await res.json());
            return {
                failure: true,
                error: "Ocorreu um erro ao fazer o comentário",
                status: res.status,
            };
        }

        let data = (await res.json()).data;
        return { failure: false, data };

    } catch (err) {
        /// Lembrar de fazer alguma pagina de erro
        alert(
            "Houve um erro ao enviar comentário. Tente novamente ou contacte um administrador!"
        );
        console.error(err);
    }
}

export async function LikeFeed(postId: string, userId: string) {

    try {
        const options = {
            method: "GET",
            headers: { authorization: getCookie("token") as string }
        };

        const res = await fetch(`${process.env.REACT_APP_API}/posts/${postId}/like/${userId}`, options);

        let data = (await res.json()).data;

        return data;
    } catch (err) {
        /// Lembrar de fazer alguma pagina de erro
        alert(
            "Erro ao curtir. Tente novamente ou contacte um administrador!"
        );
        console.error(err);
    }
}
