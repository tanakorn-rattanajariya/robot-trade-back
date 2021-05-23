import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stock, StockDocument } from '../schemas';

@Injectable()
export class StockService {
  constructor(@InjectModel(Stock.name) private model: Model<StockDocument>) {}

  async create(data: Stock): Promise<Stock> {
    return new this.model(data).save();
  }
  async update(data: Stock, abbr: string): Promise<Stock> {
    return this.model.findByIdAndUpdate({ abbr }, data);
  }
  async findAll(): Promise<Stock[]> {
    return this.model.find().exec();
  }
  async findOne(abbr: string): Promise<Stock> {
    return this.model.findOne({ abbr });
  }
  async delete(abbr: string): Promise<string> {
    this.model.deleteOne({ abbr });
    return abbr;
  }
}
