import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { StockSchema, Stock } from '../schemas';
import { StockController } from '../controllers';
import { StockService } from '../services';
import { Connection } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Stock.name, schema: StockSchema }]),
  ],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
