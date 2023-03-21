import Redis from "ioredis";
import Logger from "../logger/logger";

class RedisDb {
    private client: Redis;
    private pub: Redis;
    public sub: Redis;
    expire: number;
    callbackFeed: (message: any) => void;
    callbackGroup: (message: any) => void;
    callbackChat: (message: any) => void;

    constructor() {
        const port = Number(process.env.REDIS_PORT) || 6379;
        const host = process.env.REDIS_HOST || "";
        const password = process.env.REDIS_PASSWORD || "";
        this.expire = Number(process.env.REDIS_EXPIRE) || 3600;
        this.client = new Redis({ port, host, password });
        this.pub = new Redis({ port, host, password });
        this.sub = new Redis({ port, host, password });
        this.sub.subscribe("feed", "group", "chat");
        this.callbackFeed = () => {};
        this.callbackGroup = () => {};
        this.callbackChat = () => {};
    }

    public async set(key: string, value: any) {
        try {
            await this.client.set(key, JSON.stringify(value), "EX", this.expire);
        } catch (error) {
            Logger.error("Error setting Redis key", { key, value }, error);
            throw error;
        }
    }

    public async get(key: string) {
        try {
            const value = await this.client.get(key);
            if (!value) {
                return null;
            }
            await this.client.expire(key, this.expire);
            return JSON.parse(value);
        } catch (error) {
            Logger.error("Error getting Redis key", key, error);
            throw error;
        }
    }

    public async del(key: string) {
        try {
            return await this.client.del(key);
        } catch (error) {
            Logger.error("Error deleting Redis key", key, error);
            throw error;
        }
    }

    public async sadd(key: string, value: any) {
        try {
            await this.client.sadd(key, JSON.stringify(value));
            await this.client.expire(key, this.expire);
        } catch (error) {
            Logger.error("Error setting Redis key", { key, value }, error);
            throw error;
        }
    }

    public async srem(key: string, value: any) {
        try {
            await this.client.srem(key, JSON.stringify(value));
            await this.client.expire(key, this.expire);
        } catch (error) {
            Logger.error("Error setting Redis key", key, error);
            throw error;
        }
    }

    public async smembers(key: string) {
        try {
            const value = await this.client.smembers(key);
            if (!value) {
                return null;
            }
            await this.client.expire(key, this.expire);
            return value.map((v) => JSON.parse(v));
        } catch (error) {
            Logger.error("Error getting Redis members key", key, error);
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
    public async subscribe() {
        try {
            this.sub.on("message", async (ch, message) => {
                if (ch === "feed") {
                    this.callbackFeed(JSON.parse(message));
                } else if (ch === "group") {
                    this.callbackGroup(JSON.parse(message));
                } else if (ch === "chat") {
                    this.callbackChat(JSON.parse(message));
                }
            });
        } catch (error: any) {
            Logger.error("Error subscribing Redis message", error.message);
            throw error;
        }
    }
}

export const redis = new RedisDb();
