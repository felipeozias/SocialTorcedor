import Redis from "ioredis";
import Logger from "../logger/logger";

class RedisDb {
    private client: Redis;
    private pub: Redis;
    public sub: Redis;
    expire: number;

    constructor() {
        const port = Number(process.env.REDIS_PORT) || 6379;
        const host = process.env.REDIS_HOST || "";
        const password = process.env.REDIS_PASSWORD || "";
        this.expire = Number(process.env.REDIS_EXPIRE) || 3600;
        this.client = new Redis({ port, host, password });
        this.pub = new Redis({ port, host, password });
        this.sub = new Redis({ port, host, password });
    }

    public async set(key: string, value: any) {
        try {
            await this.client.set(key, JSON.stringify(value), "EX", this.expire);
        } catch (error) {
            Logger.error("Error setting Redis key", error);
            throw error;
        }
    }

    public async get(key: string) {
        try {
            const value = await this.client.get(key);
            if (!value) {
                throw new Error("Key not found");
            }
            return JSON.parse(value);
        } catch (error) {
            Logger.error("Error getting Redis key", error);
            throw error;
        }
    }

    public async del(key: string) {
        try {
            return await this.client.del(key);
        } catch (error) {
            Logger.error("Error deleting Redis key", error);
            throw error;
        }
    }

    public async publish(channel: string, message: any) {
        try {
            return await this.pub.publish(channel, JSON.stringify(message));
        } catch (error) {
            Logger.error("Error publishing Redis message", error);
            throw error;
        }
    }
    public async subscribe(channel: string, callback: (message: any) => void) {
        try {
            await this.sub.subscribe("feed");
            this.sub.on("message", async (channel, message) => {
                callback(JSON.parse(message));
            });
        } catch (error: any) {
            Logger.error("Error subscribing Redis message", error.message);
            throw error;
        }

        /*await this.sub.subscribe(channel);
        this.sub.on("message", (channel, message) => {
            callback(JSON.parse(JSON.parse(message)));
        });*/
    }
}

export const redis = new RedisDb();
