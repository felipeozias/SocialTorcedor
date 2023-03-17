import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import Logger from "../logger/logger";

export default class Websocket {
    io: Server;

    constructor(httpServer: HttpServer) {
        this.io = new Server(httpServer, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
            },
        });
    }

    start() {
        this.io.on("connection", (socket) => {
            console.log("🔰 Socket conectado: " + socket.id);
            socket.on("disconnect", () => {
                console.log("🔰 Socket desconectado: " + socket.id);
            });
        });
        Logger.info("🔰 Websocket rodando!");
    }

    feed(action: string, target: string, data: any) {
        this.io.emit("feed", { action, target, data });
    }
}
