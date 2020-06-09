"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Definir un enrutador
const express_1 = require("express");
const pruebaController_1 = __importDefault(require("../Controllers/pruebaController"));
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pruebaController_1.default.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
