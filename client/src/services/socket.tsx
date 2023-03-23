import io from "socket.io-client";
import { getCookie } from "../utils/cookies";

let socket: any = null;

export function connect() {
    if (socket === null) {
        socket = get();
    }
    return socket;
}

function get() {
    const token = getCookie("token");

    const socket = io(process.env.REACT_APP_API as string, {
        auth: {
            token,
        },
    });

    socket.on("connect", () => {
        // console.log("Socket on to server");
        // console.log("Socket id => ", socket.id);
    });

    socket.on("error", (error) => {
        // console.error("WebSocket error:", error);
    });

    socket.on("disconnect", (reason) => {
        // console.warn("Disconnected from server:", reason);
    });

    return socket;
}
