import express from 'express';
import carsRoute from './Routes/carsRoute';
import motorcycleRoute from './Routes/motorcycleRoute';

const app = express();
app.use(express.json());
app.use('/cars', carsRoute);
app.use('/motorcycles', motorcycleRoute);

export default app;
