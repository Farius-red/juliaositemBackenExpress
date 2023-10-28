import {DatesUserDTO} from '../dtos/DatesUserDTO';

export class RegisterUserDTO {
  idBussines: number | null | undefined;
  id: string | undefined;
  email: string | undefined;
  password: string | undefined;
  datesUser: DatesUserDTO | undefined;
  token: string | undefined;
}


