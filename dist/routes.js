"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarController_1 = __importDefault(require("./controllers/CarController"));
const carController = new CarController_1.default;
const router = (0, express_1.Router)();
router.get('/cars', carController.getAll);
router.get('/car/:id', carController.getById);
router.post('/car', carController.add);
router.put('/car/:id', carController.update);
router.delete('/car/:id', carController.delete);
exports.default = router;
