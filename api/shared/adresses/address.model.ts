export interface IAddressModel {
  id?: number;
  country: string;
  city: string;
  latitude: number;
  longitude: number;
  description: string;
  disabled?: boolean;
}
