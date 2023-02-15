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
}

export default MotorcycleService;