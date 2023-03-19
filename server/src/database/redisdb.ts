import { createClient } from "redis";
import Logger from "../logger/logger";

export default class RedisDb {
    constructor() {}

    static client() {
        const PORT: number = parseInt(process.env.REDIS_PORT || "");
        const client = createClient({
            socket: {
                host: process.env.REDIS_HOST,
                port: PORT,
            },
            password: process.env.REDIS_PASSWORD,
        });
        client.connect().catch(console.error);
        client.on("error", (err) => {
            Logger.error(`🔰 Erro ao se conectar com o Redis: ${err}`);
        });

        return client;
    }
}
