import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { StockSchema, Stock } from '../schemas';
import { StockController } from '../controllers';
import { StockService } from '../services';
import { Connection } from 'mongoose';
@Module({
  imports: [DatabaseModule],
  controllers: [StockController],
  providers: [
    StockService,
    {
      provide: Stock.name,
      useFactory: (connection: Connection) =>
        connection.model(Stock.name, StockSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ],
})
export class StockModule {}
