import { 
  // isValidObjectId, 
  model, 
  Model, 
  models, 
  Schema, 
  // UpdateQuery,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected name: string;

  constructor(schema: Schema, name: string) {
    this.schema = schema;
    this.name = name;
    this.model = models[this.name] || model(this.name, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T []> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async updateById(id: string, obj: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, obj, { new: true });
  }
}

export default AbstractODM;