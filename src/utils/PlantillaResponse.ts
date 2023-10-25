
import { HttpStatus } from '@nestjs/common';

export class PlantillaResponse<E> {
  isRta?: boolean;
  message?: string;
  httpStatus?: HttpStatus;
  data?: E;
  dataList?: E[];
}
