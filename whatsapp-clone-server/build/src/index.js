"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("../db");
const app = express_1.default();
app.use(cors_1.default());
app.get('/_ping', (req, res) => {
    res.send('pong');
});
app.get('/chats', (req, res) => {
    res.json(db_1.chats);
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is alive on port ${port}`);
});
