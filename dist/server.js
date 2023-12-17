"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
require("dotenv/config");
require("./database/config");
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(routes_1.default);
server.listen(process.env.PORT || 8080, () => {
    console.log("⚡ Server running! 🦾 ");
});
