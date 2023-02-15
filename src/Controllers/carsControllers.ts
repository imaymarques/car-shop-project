import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/carsService';

export default class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async addCar() {
    if (!this.req.body.status) this.req.body.status = false;
    const car: ICar = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    const addNewCar = await this.service.createCar(car);
    return this.res.status(201).json(addNewCar);
  }

  public async getAllCars() {
    const getCars = await this.service.getAllCars();
    return this.res.status(200).json(getCars);
  }

  public async getCarById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
    const carId = await this.service.getCarById(id);
    if (!carId) return this.res.status(404).json({ message: 'Car not found' });
    return this.res.status(200).json(carId);
  }

  public async updateById() {
    const { id } = this.req.params;
    const cars: ICar = this.req.body;
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
    const updateCar = await this.service.updateById(id, cars);
    if (!updateCar) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    return this.res.status(200).json(updateCar);
  } 
}