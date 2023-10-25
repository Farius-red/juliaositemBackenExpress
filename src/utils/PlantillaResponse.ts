
import { HttpStatus } from '@nestjs/common';

export class PlantillaResponse<E> {
  isRta: boolean;
  message: string;
  httpStatus: HttpStatus;
  data: E;
  dataList?: E[];


  constructor(
    isRta: boolean,
    message: string,
    httpStatus: HttpStatus,
    data: E,
    dataList?: E[],

  ) {
    this.isRta = isRta;
    this.message = message;
    this.httpStatus = httpStatus;
    this.data = data;
    this.dataList = dataList;

  }
}

