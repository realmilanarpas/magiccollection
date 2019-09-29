import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { Card } from './entity/card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardSet } from './entity/card-set.entity';
import { CardAmount } from './entity/card-amount.entity';
import { CardService } from './card.service';
import { CardRepository } from './card.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CardRepository, CardSet, CardAmount])],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
