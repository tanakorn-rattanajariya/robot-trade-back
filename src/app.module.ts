import { Module } from '@nestjs/common';
import { StockModule } from './modules';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [StockModule, MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
