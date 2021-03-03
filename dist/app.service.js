"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "bcp";
let AppService = class AppService {
    getHelloenglish() {
        return "Hello World!";
    }
    getHelloSpanish() {
        return "Hola Mundo!";
    }
    async listCurrencies() {
        const conn = await MongoClient.connect(url);
        const dbo = await conn.db("bcp");
        const lista = await dbo
            .collection("currencies")
            .find()
            .toArray();
        return lista;
    }
    async getExchangeRate(x, y, z, w) {
        const conn = await MongoClient.connect(url);
        const dbo = await conn.db("bcp");
        var query = { moneda: x, fecha: z };
        var lista = await dbo
            .collection("exchangerate")
            .find(query)
            .toArray();
        var valor = 1.0 / lista[0].valor;
        query = { moneda: y, fecha: z };
        lista = await dbo
            .collection("exchangerate")
            .find(query)
            .toArray();
        valor = valor * lista[0].valor;
        return {
            valor: (w * valor).toFixed(2)
        };
    }
    async createExchangeRate(x) {
        const conn = await MongoClient.connect(url);
        const dbo = await conn.db("bcp");
        const create = await dbo.collection("exchangerate").insertOne(x);
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map