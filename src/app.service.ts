import { Injectable } from "@nestjs/common";

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "bcp";

@Injectable()
export class AppService {
  getHelloenglish(): string {
    return "Hello World!";
  }

  getHelloSpanish(): string {
    return "Hola Mundo!";
  }

  async listCurrencies(): Promise<any> {
    const conn = await MongoClient.connect(url);
    const dbo = await conn.db("bcp");
    const lista = await dbo
      .collection("currencies")
      .find()
      .toArray();

    return lista;
  }

  async getExchangeRate(
    x: string,
    y: string,
    z: Date,
    w: number
  ): Promise<any> {
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

  async createExchangeRate(x: any): Promise<any> {
    const conn = await MongoClient.connect(url);
    const dbo = await conn.db("bcp");
    const create = await dbo.collection("exchangerate").insertOne(x);

    //return create;
  }
}
