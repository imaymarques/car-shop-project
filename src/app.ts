import express from 'express';
import carsRoute from './Routes/carsRoute';

const app = express();
app.use(express.json());
app.use('/cars', carsRoute);

export default app;
