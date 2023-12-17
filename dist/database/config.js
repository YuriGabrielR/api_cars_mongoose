"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbAcess = process.env.MONGO_URI;
mongoose_1.default.connect(dbAcess).then((connect) => {
    console.log('MongoDB Connection Succeeded');
}).catch((err) => {
    console.log(`Erro: ${err}`);
});
