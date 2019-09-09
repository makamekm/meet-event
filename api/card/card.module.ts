import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './card.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CardEntity]),
  ],
  // controllers: [CardController],
  // providers: [CardService, JwtStrategy],
  // exports: [CardService, JwtStrategy],
})
export class CardModule {}
