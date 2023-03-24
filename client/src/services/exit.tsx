import { getCookie } from "../utils/cookies";
import { connect } from "./socket";

export default async function exit() {
    /* const socket = connect();
    socket.disconnect(); */

    try {
        const options = {
            method: "DELETE",
            headers: {
                authorization: getCookie("token") as string,
            },
        };

        const url: string = process.env.REACT_APP_USER_EXIT as string;
        const res = await fetch(url, options);
    } catch (err) {
        console.error(err);
    }

    document.cookie = "token=; expires=" + new Date(2010, 0, 1) + "; path=/";
}
