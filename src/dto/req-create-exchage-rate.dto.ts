//import { ApiModelProperty } from '@nestjs/swagger';

export class ReqCreateExchangeRate {
  //@ApiModelProperty({ description: 'Token' })
  //token: string;
  moneda: string;
  valor: number;
  fecha: Date;
}
