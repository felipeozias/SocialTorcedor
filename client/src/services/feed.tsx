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
        // console.log(data);

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
        const form = new FormData();
        form.append("content", `${content}`);
        form.append("author", "640ab68a27fea004b4b9ce05");
        form.append("photo", "C:\\Users\\ozias\\Desktop\\MyPhoto.jpg");

        const options = {
            method: "POST",
            headers: {
                "Content-Type":
                    "multipart/form-data; boundary=---011000010111000001101001",
                authorization:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IjY0MGFiNjhhMjdmZWEwMDRiNGI5Y2UwNSIsImlhdCI6MTY3OTMxMDkwNSwiZXhwIjoxNjc5MzE0NTA1fQ.1vr4wkuyquKKSBFFEGiSrKASvquVx6oC4FH2AoqHXuo",
            },
            body: form,
        };

        // const options = {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: `{"content":"${content}","author":"640ab68a27fea004b4b9ce05","pathImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeW-gyEUEq2lTJP_4i_gmk6vPUwe0qZSlESg&usqp=CAU"}`,
        // };

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
