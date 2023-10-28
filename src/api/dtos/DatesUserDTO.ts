import { AddresDTO } from "./AddresDTO";
import { PhoneDTO } from "./PhoneDTO";

export class DatesUserDTO {
  idDatesUser: string = '';
  firstName: string = '';
  secondName: string = '';
  phone: PhoneDTO[] = [];
  idUrl: string = '';
  addresses: AddresDTO[] = [];
  estado: string = '';
  nombreRol: string = '';
}
