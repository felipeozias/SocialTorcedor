import Express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { router } from "./router/router";
import MongoDB from "./database/mongodb";
import Logger from "./logger/logger";
import cors from "cors";
import Websocket from "./websocket/websocket";
import RedisDb from "./database/redisdb";

dotenv.config({ path: "./config/.env" });

const port = process.env.PORT || 8000;

const app = Express();
app.use(cors());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

const swaggerDocument = require("../config/swagger.json");

const options = {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "Social Torcedor API",
    customfavIcon: "/assets/favicon.ico",
};
app.use("/assets", Express.static("uploads"));
app.use("/logs", Express.static("logs"));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.use(router);

const server = createServer(app);

export const io = new Websocket(server);

server.listen(port, async () => {
    const version = process.env.NODE_ENV || "error";
    if (version === "error") {
        Logger.error("🔰 Variável de ambiente NODE_ENV não definida!");
        Logger.error("🔰 Adicione o arquivo .env na pasta ./config e declare as variáveis de acordo com o arquivo .env.example");
        return;
    }
    Logger.info(`🔰 Ambiente: ${version}`);

    const uri = process.env.MONGO_URI || "";
    const user = process.env.MONGO_USER || "";
    const password = process.env.MONGO_PASSWORD || "";
    const database = process.env.MONGO_DB || "";

    const mongo = new MongoDB(uri, user, password, database);
    await mongo.connect();
    RedisDb.client();
    Logger.info("🔰 Conectado ao Redis!");
    io.start();
    Logger.info(`🔰 Servidor rodando na porta ${port}!`);
});
