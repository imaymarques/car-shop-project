import { Router } from 'express';
import CarsController from '../Controllers/carsControllers';

const route = Router();

route.post('/', (req, res, next) => new CarsController(req, res, next).addCar());
route.get('/', (req, res, next) => new CarsController(req, res, next).getAllCars());
route.get('/:id', (req, res, next) => new CarsController(req, res, next).getCarById());

export default route;