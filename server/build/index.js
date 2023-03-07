"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const port = 8000;
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(router);
        this.app.listen(port, () => {
            console.log(`Server init in port ${port}`);
        });
    }
}
const app = new App();
router.get("/", (req, res) => { res.send("🔰 Olá, eu sou o servidor ❤"); });
