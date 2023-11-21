
import { HttpStatus } from '@nestjs/common';

export class PlantillaResponse<E> {
  message?: string;
  httpStatus?: HttpStatus;
  data?: E;
  dataList?: E[];
}
