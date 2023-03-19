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
        this.io.use((socket, next) => {
            const token = socket.handshake.auth.token;
            if (!token) {
                return next(new Error("token não informado"));
            }

            if (token !== "aaaa") {
                return next(new Error("invalid username"));
            }

            next();
        });

        this.io.on("connection", (socket) => {
            console.log("id", socket.id, "auth", socket.handshake.auth);
            this.io.to(socket.id).emit("feed", `Seja bem vindo token: ${socket.handshake.auth.token}`);
            socket.on("disconnect", () => {
                console.log(`🔰 Socket conectado: ${socket.id} - user: ${socket.handshake.auth} `);
            });
        });
        Logger.info("🔰 Websocket rodando!");
    }

    feed(action: string, target: string, data: any) {
        this.io.emit("feed", { action, target, data });
        // this.io.to
    }
}
