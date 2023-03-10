import mongoose from "mongoose";
import Logger from "../logger/logger";

export default class MongoDB {
    uri: string;
    user: string;
    password: string;
    database: string;

    constructor(uri: string, user: string, password: string, database: string) {
        this.uri = uri;
        this.user = user;
        this.password = password;
        this.database = database;
    }

    public async connect() {
        const options = {
            user: this.user,
            pass: this.password,
            dbName: this.database,
        };

        try {
            await mongoose.connect(this.uri, options);
            Logger.info("Connected to MongoDB");
        } catch (error) {
            Logger.error("Error connecting to MongoDB", error);
            throw error;
        }
    }
}
