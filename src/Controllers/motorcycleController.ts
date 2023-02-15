import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/motorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private serviceMotorcycle: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.serviceMotorcycle = new MotorcycleService();
  }

  public async create() {
    if (!this.req.body.status) this.req.body.status = false;

    const motorcycle: IMotorcycle = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    const createMotorcycle = await this.serviceMotorcycle.create(motorcycle);
    return this.res.status(201).json(createMotorcycle);
  }
}

export default MotorcycleController;