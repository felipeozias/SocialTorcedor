import { createClient } from "redis";
import Logger from "../logger/logger";

export default class RedisDb {
    constructor() {}

    static client() {
        const client = createClient({ url: process.env.REDIS_URI });
        client.connect().catch(console.error);
        client.on("error", (err) => {
            Logger.error(`Erro ao acessar o Redis: ${err}`);
        });

        return client;
    }
}
