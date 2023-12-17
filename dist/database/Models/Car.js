"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const CarModel = new mongoose_1.Schema({
    marca: String,
    modelo: String,
    ano: Number,
    quilometragem: Number,
    tipoCambio: String,
    precoVenda: Number
}, { timestamps: true });
exports.default = mongoose_2.default.model('Car', CarModel);
