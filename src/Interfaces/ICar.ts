import IVehicle from './IVehicle';

export default interface ICar extends IVehicle {
  id?: string;
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
  doorsQty: number;
  seatsQty: number;
}
