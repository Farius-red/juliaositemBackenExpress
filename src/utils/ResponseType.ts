import { HttpStatus } from '@nestjs/common'; // Importa el módulo HttpStatus desde tu framework (puede variar según tu entorno)


export class ResponseType {
  constructor(
    public readonly code: number,
    public readonly message: string,
    public readonly rta: boolean,
    public readonly httpStatus: HttpStatus
  ) {}

  static fromCode(code: number): ResponseType | null {
    const responses: ResponseType[] = [
      new ResponseType(1, 'Creado', true, HttpStatus.CREATED),
      new ResponseType(2, 'Actualizado', true, HttpStatus.OK),
      new ResponseType(3, 'Fallo', false, HttpStatus.INTERNAL_SERVER_ERROR),
      // Agrega otros tipos de respuesta aquí
    ];

    return responses.find((response) => response.code === code) || null;
  }
}



