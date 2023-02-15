import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/carsModel';
import Car from '../Domains/Car';

class CarService {
  public carModel = new CarsModel();
  private addCar(car: ICar): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar) {
    const getCar = await this.carModel.create(car);

    return this.addCar(getCar);
  }

  public async getAllCars() {
    const getCars = await this.carModel.findAll();
    const result = getCars.map((el) => this.addCar(el));
    return result;
  }

  public async getCarById(id: string) {
    const carId = await this.carModel.findById(id);
    return this.addCar(carId as ICar);
  }
}

export default CarService;