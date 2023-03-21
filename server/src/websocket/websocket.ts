import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import Logger from "../logger/logger";
import { redis } from "../database/redisdb";
import IGroup from "../interfaces/igroup";
import { Group } from "../models/group";
import IMessage from "../interfaces/imessage";

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
            socket.handshake.query.username = user._id;
            next();
        });

        this.io.on("connection", (socket) => {
            redis.sadd(socket.handshake.query.username as string, socket.id);
            this.io.to(socket.id).emit("feed", `Seja bem vindo: ${socket.handshake.query.username}`);
            console.info(`🔰 Socket connected : ${socket.id} - user: ${socket.handshake.query.username} `);
            socket.on("disconnect", () => {
                redis.srem(socket.handshake.query.username as string, socket.id);
                console.info(`🔰 Socket disconnected : ${socket.id} - user: ${socket.handshake.query.username} `);
            });
        });
        redis.callbackFeed = this.subFeed.bind(this);
        redis.callbackGroup = this.subGroup.bind(this);
        redis.callbackChat = this.subChat.bind(this);
        redis.subscribe();
        Logger.info("🔰 Websocket rodando!");
    }

    pubFeed(action: string, target: string, data: any) {
        redis.publish("feed", { action, target, data });
    }

    private subFeed(message: any) {
        this.io.emit("feed", message);
    }

    pubGroup(action: string, data: IGroup) {
        redis.publish("group", { action, data });
    }

    private async subGroup(message: any) {
        const { data } = message;
        const { _id } = data;
        const after_members = data.members;
        const before_members = (await redis.get(_id)) || [];
        const members = new Set();
        members.add(data.admin);

        for (const member of after_members) {
            members.add(member._id || member);
        }

        for (const member of before_members) {
            members.add(member._id || member);
        }

        for (const member of members) {
            const listSocket = await redis.smembers(member as string);
            if (listSocket) {
                for (const socketId of listSocket) {
                    this.io.to(socketId).emit("group", message);
                }
            }
        }
        redis.set(_id, after_members);
    }

    pubChat(group: IGroup, data: IMessage) {
        redis.publish("chat", { group, data });
    }

    private async subChat(message: any) {
        const members = [...message.group.members];
        members.push(message.group.admin);
        console.log(message);
        for (const member of members) {
            const listSocket = await redis.smembers(member as string);
            if (listSocket) {
                for (const socketId of listSocket) {
                    this.io.to(socketId).emit("chat", message);
                }
            }
        }
    }
}
