import { Router } from 'express';
import CarsController from '../Controllers/carsControllers';

const route = Router();

route.post('/', (req, res, next) => new CarsController(req, res, next).addCar());

export default route;