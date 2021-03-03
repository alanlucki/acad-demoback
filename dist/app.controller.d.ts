import { AppService } from "./app.service";
import { ReqCreateExchangeRate } from "./dto/req-create-exchage-rate.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHelloEnglish(): Promise<any>;
    getHelloSpanish(): Promise<any>;
    listCurrencies(): Promise<any>;
    getExchangeRate(monedainicial: string, monedafinal: string, fecha: Date, cantidad: number): Promise<any>;
    createExchangeRate(body: ReqCreateExchangeRate): Promise<any>;
}
