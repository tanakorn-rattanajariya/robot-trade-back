import { Module } from '@nestjs/common';
import { StockModule } from './modules';

@Module({
  imports: [StockModule],
})
export class AppModule {}
