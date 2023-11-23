import { ResponseType } from './ResponseType';
import {PlantillaResponse} from './PlantillaResponse';

export class Responses<E> {
  buildResponse( tipoRespuesta: ResponseType,datos: E)
  : PlantillaResponse<E> {
    return {
      rta:tipoRespuesta.rta,
      message: tipoRespuesta.message,
      httpStatus: tipoRespuesta.httpStatus,
      data: datos,
    };
  }
}

