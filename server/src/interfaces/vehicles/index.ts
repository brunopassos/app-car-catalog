export interface IVehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: string;
  km: number;
  color: string;
  city: string;
  state: string;
  value: number;
  imageLink: string;
}

export interface IVehicleCreate {
  name: string;
  brand: string;
  model: string;
  year: string;
  km: number;
  color: string;
  city: string;
  state: string;
  value: number;
  imageLink: string;
}
