import { Router } from 'express';
import MotorcycleController from '../Controllers/motorcycleController';

const route = Router();

route.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());

export default route;