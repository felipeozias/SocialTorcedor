import Express from "express";
import dotenv from "dotenv";
import { router } from "./router/router";
import MongoDB from "./database/mongodb";
import Logger from "./logger/logger";
import cors from "cors";

dotenv.config({ path: "./env/.env" });

const port = process.env.PORT || 8000;

const app = Express();
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(cors());

app.use(router);

app.listen(port, async () => {
    const uri = process.env.MONGO_URI || "";
    const user = process.env.MONGO_USER || "";
    const password = process.env.MONGO_PASSWORD || "";
    const database = process.env.MONGO_DB || "";

    const mongo = new MongoDB(uri, user, password, database);
    await mongo.connect();
    Logger.info(`🔰 Servidor rodando na porrrrra ${port}!`);
});
