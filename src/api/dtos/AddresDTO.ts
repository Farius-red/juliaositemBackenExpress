import { CountryDTO } from "./CountryDTO";
import { PropertyTypeDTO } from "./PropertyTypeDTO";

export class AddresDTO {
  adress: string = '';
  propertyTypes: PropertyTypeDTO[] = [];
  country: CountryDTO | undefined;
}
