import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleModel from '../Models/motorcycleModels';

class MotorcycleService {
  public modelMotorcycle = new MotorcycleModel();

  private addMotorcycle(motorcycle: IMotorcycle): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const newMotocycle = await this.modelMotorcycle.create(motorcycle);

    return this.addMotorcycle(newMotocycle);
  }

  public async findAll() {
    const response = await this.modelMotorcycle.findAll();    
    const result = response.map((motorcycle) => this.addMotorcycle(motorcycle));

    return result;
  }

  public async findById(id: string) {
    const findId = await this.modelMotorcycle.findById(id);
    return this.addMotorcycle(findId as IMotorcycle);
  }

  public async updateById(id: string, motorcycle: IMotorcycle) {
    const updateCar = await this.modelMotorcycle.updateById(id, motorcycle);

    return this.addMotorcycle(updateCar as IMotorcycle);
  }
}

export default MotorcycleService;