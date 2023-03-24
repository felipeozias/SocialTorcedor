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
            return {
                failure: true,
                error: "Ocorreu um erro ao buscar os feeds",
                status: res.status,
                data: [],
            };
        }

        let data = (await res.json()).data;
        return { failure: false, error: null, data }

    } catch (err) {
        return { failure: true, error: `Ocorreu um erro ao carregar os feeds. Tente novamente ou contacte um administrador! Erro: ${err}`, data: [] }
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
                authorization: getCookie("token") as string,
            },
            body: formData,
        };

        const res = await fetch(`${process.env.REACT_APP_API}/posts`, options);

        if (!res.ok) {
            return {
                failure: true,
                error: `Ocorreu um erro ao fazer a publicação. Erro: ${await res.json()}`,
                status: res.status,
                data: [],
            };
        }

        let data = (await res.json()).data;
        return { failure: false, error: null, data };

    } catch (err) {
        return { failure: true, error: `Ocorreu um erro ao enviar a publicação. Tente novamente ou contacte um administrador!. Erro: ${err}`, data: [] };
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
            return {
                failure: true,
                error: `Ocorreu ao comentar, se persistir contacte o administrador! Erro: ${await res.json()}`,
                status: res.status,
                data: []
            };
        }

        let data = (await res.json()).data;
        return { failure: false, error: null, data };

    } catch (err) {
        return { failure: true, error: `Ocorreu ao comentar, se persistir contacte o administrador! Erro: ${err}` };
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
        // console.log('retorno fetch ===> ', data);

        return { failure: false, error: null, data };
    } catch (err) {
        return { failure: true, error: `Erro ao curtir, recarregue a página e tente novamente!` };
    }
}
