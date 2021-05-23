import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Stock {
  @Prop({ required: true })
  name: string;

  @Prop()
  abbr: string;
}

export type StockDocument = Stock & Document;
export const StockSchema = SchemaFactory.createForClass(Stock);