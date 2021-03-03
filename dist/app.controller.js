"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const req_create_exchage_rate_dto_1 = require("./dto/req-create-exchage-rate.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getHelloEnglish() {
        return this.appService.getHelloenglish();
    }
    async getHelloSpanish() {
        return this.appService.getHelloSpanish();
    }
    async listCurrencies() {
        return await this.appService.listCurrencies();
    }
    async getExchangeRate(monedainicial, monedafinal, fecha, cantidad) {
        return this.appService.getExchangeRate(monedainicial, monedafinal, fecha, cantidad);
    }
    async createExchangeRate(body) {
        return this.appService.createExchangeRate(body);
    }
};
__decorate([
    common_1.Get("/helloenglish"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHelloEnglish", null);
__decorate([
    common_1.Get("/hellospanish"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHelloSpanish", null);
__decorate([
    common_1.Get("/currencies"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "listCurrencies", null);
__decorate([
    common_1.Get("/exchangerate/"),
    __param(0, common_1.Query("monedainicial")),
    __param(1, common_1.Query("monedafinal")),
    __param(2, common_1.Query("fecha")),
    __param(3, common_1.Query("cantidad")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Date, Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getExchangeRate", null);
__decorate([
    common_1.Post("/exchangerate"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_create_exchage_rate_dto_1.ReqCreateExchangeRate]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createExchangeRate", null);
AppController = __decorate([
    common_1.Controller("/api"),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map