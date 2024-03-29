import { getCookie } from "../utils/cookies";
import { connect } from "./socket";

export default async function chat(id: string) {
    try {
        const options = {
            method: "GET",
            headers: {
                authorization: getCookie("token") as string,
            },
        };

        const url: string =
            `${process.env.REACT_APP_API}/groups/${id}` as string;
        const res = await fetch(url, options);

        if (!res.ok) {
            return {
                failure: true,
                error: "Ocorreu um erro ao buscar os grupos",
                status: res.status,
                data: [],
            };
        }

        const data = await res.json();

        return { data, failure: false };
    } catch (err) {
        return {
            failure: true,
            error: `Ocorreu um erro ao buscar os grupos. Se persistir contact um administrador! Erro: ${err}`,
            status: 500,
            data: [],
        };
    }
}

export function sendMessage(id: string, message: string) {
    const socket = connect();
    socket.emit("send message", { id, message });
}
