import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/carsModel';
import Car from '../Domains/Car';

class CarService {
  private addCar(car: ICar): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar) {
    const getCar = new CarsModel();
    const newCar = await getCar.createCar(car);

    return this.addCar(newCar);
  }
}

export default CarService;