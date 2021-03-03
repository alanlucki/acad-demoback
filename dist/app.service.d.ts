export declare class AppService {
    getHelloenglish(): string;
    getHelloSpanish(): string;
    listCurrencies(): Promise<any>;
    getExchangeRate(x: string, y: string, z: Date, w: number): Promise<any>;
    createExchangeRate(x: any): Promise<any>;
}
