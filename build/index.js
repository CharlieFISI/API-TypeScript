"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subs_1 = __importDefault(require("./routes/subs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3000;
app.get('/ping', (_req, res) => {
    console.log('Alguien ha hecho ping ' + new Date().toLocaleDateString());
    res.send('pong');
});
app.use('/subs', subs_1.default);
app.listen(port, () => console.log(`¡Servidor conectado al puerto ${port}!`));
