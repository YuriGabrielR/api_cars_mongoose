"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("../database/Models/Car"));
class CarController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cars = yield Car_1.default.find();
            return res.json(cars);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                let car = yield Car_1.default.findById(id);
                res.status(200);
                return res.json(car);
            }
            catch (err) {
                res.json({ erro: err });
            }
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { marca, modelo, ano, quilometragem, tipoCambio, precoVenda } = req.body;
                if (marca && modelo && ano && quilometragem && tipoCambio && precoVenda) {
                    let car = yield Car_1.default.create(req.body);
                    res.status(200);
                    return res.json(car);
                }
                else {
                    res.json({ erro: 'bad request' });
                    res.status(401);
                }
            }
            catch (err) {
                res.json({ err: err });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let car = yield Car_1.default.findByIdAndUpdate(id, req.body);
            return res.json(car);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let car = yield Car_1.default.findByIdAndDelete(id);
            return res.json(car);
        });
    }
}
exports.default = CarController;
