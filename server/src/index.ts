import express from "express";
import { Request, Response } from "express";
const router = express.Router();
const port = 8000;

class App {
    app: express.Application;
    constructor() {
        this.app = express();
        this.app.use(router);

        this.app.listen(port, () => {
            console.log(`Server init in port ${port}`);
        });
    }
}

const app = new App();

router.get("/", (req: Request, res: Response) => { res.send("🔰 Olá, eu sou o servidor ❤") });