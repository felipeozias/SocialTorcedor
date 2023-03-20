import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import Logger from "../logger/logger";
import { redis } from "../database/redisdb";

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
        this.io.use(async (socket, next) => {
            const token = socket.handshake.auth.token;
            if (!token) {
                return next(new Error("token não informado"));
            }
            const user = await redis.get(token);
            if (!user) {
                return next(new Error("token inválido"));
            }
            redis.set(user._id, socket.id);
            socket.handshake.query.username = user._id;
            next();
        });

        this.io.on("connection", (socket) => {
            console.log("id", socket.id, "auth", socket.handshake.auth);
            this.io.to(socket.id).emit("feed", `Seja bem vindo token: ${socket.handshake.query.username}`);
            socket.on("disconnect", () => {
                console.log(`🔰 Socket conectado: ${socket.id} - user: ${socket.handshake.auth} `);
            });
        });
        redis.subscribe("feed", this.subFeed.bind(this));
        redis.subscribe("group", this.subGroup.bind(this));
        Logger.info("🔰 Websocket rodando!");
    }

    pubFeed(action: string, target: string, data: any) {
        redis.publish("feed", { action, target, data });
    }

    subFeed(message: any) {
        this.io.emit("feed", message);
        // this.io.to
    }

    subGroup(message: any) {
        this.io.emit("group", message);
        // this.io.to
    }
}
