import { Controller, Get, Post, Param, Put, Delete,Body } from '@nestjs/common';
import { Stock } from '../schemas';
import { StockService } from '../services';
@Controller('stocks')
export class StockController {
  constructor(private service: StockService) {}

  @Post()
  async create(@Body() data: Stock): Promise<Stock> {
    return await this.service.create(data);
  }
  @Put()
  async update(data: Stock, abbr: string): Promise<Stock> {
    return await this.service.update(data, abbr);
  }
  @Delete()
  async delete(abbr: string): Promise<string> {
    return await this.service.delete(abbr);
  }

  @Get()
  async findAll(): Promise<Array<Stock>> {
    return await this.service.findAll();
  }

  @Get(':abbr')
  async get(@Param() params): Promise<Stock> {
    return await this.service.findOne(params.abbr);
  }
}
