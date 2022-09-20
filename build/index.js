"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.get('/', (req, res) => {
    app.use("/", express_1.default.static("./static"));
});
app.listen(config_1.default.port, () => {
    console.log(`Example app listening on port ${config_1.default.port}!`);
});
