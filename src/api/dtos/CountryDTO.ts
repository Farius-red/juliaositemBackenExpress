import { CityDTO } from "./CityDTO";

export class CountryDTO {
  idCountry: number = 0;
  name: string = '';
  cities: CityDTO | null = null;
}
