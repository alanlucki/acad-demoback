import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { ReqCreateExchangeRate } from "./dto/req-create-exchage-rate.dto";

//@ApiUseTags('Users')

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/helloenglish")
  async getHelloEnglish(): Promise<any> {
    return this.appService.getHelloenglish();
  }

  @Get("/hellospanish")
  async getHelloSpanish(): Promise<any> {
    return this.appService.getHelloSpanish();
  }

  @Get("/currencies")
  async listCurrencies(): Promise<any> {
    return await this.appService.listCurrencies();
  }

  @Get("/exchangerate/")
  async getExchangeRate(
    @Query("monedainicial") monedainicial: string,
    @Query("monedafinal") monedafinal: string,
    @Query("fecha") fecha: Date,
    @Query("cantidad") cantidad: number
  ): Promise<any> {
    return this.appService.getExchangeRate(
      monedainicial,
      monedafinal,
      fecha,
      cantidad
    );
  }

  @Post("/exchangerate")
  async createExchangeRate(@Body() body: ReqCreateExchangeRate): Promise<any> {
    return this.appService.createExchangeRate(body);
  }
}
