import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entity/card.entity';
import { Repository } from 'typeorm';
import { CardSet } from './entity/card-set.entity';
import { User } from '../auth/entity/user.entity';
import { CardAmount } from './entity/card-amount.entity';
import { CardRepository } from './card.repository';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardRepository)
    private cardRepository: CardRepository,
    @InjectRepository(CardSet)
    private cardExpansionRepository: Repository<CardSet>,
  ) {}

  async createDummyCards() {
    console.log('Dummy lefutott');

    const newSet = new CardSet();
    newSet.name = 'Ravnica';
    newSet.shortName = 'RNA';
    await newSet.save();

    const newCard = new Card();
    newCard.name = 'Test card1';
    newCard.cardNumber = 2;
    newCard.rarity = 'R';
    newCard.layout = 'Normal';
    newCard.cardSet = newSet;
    await newCard.save();

    const newCard2 = new Card();
    newCard2.name = 'Test card2';
    newCard2.cardNumber = 3;
    newCard2.rarity = 'U';
    newCard2.layout = 'Normal';
    newCard2.cardSet = newSet;
    await newCard2.save();

    const newUser = new User();
    newUser.name = 'Csabi';
    newUser.password = '111';
    await newUser.save();

    const newAmount = new CardAmount();
    newAmount.user = newUser;
    newAmount.card = newCard;
    newAmount.amount = 10;
    await newAmount.save();

    const newAmount2 = new CardAmount();
    newAmount2.user = newUser;
    newAmount2.card = newCard2;
    newAmount2.amount = 10;
    await newAmount2.save();
  }

  async getCardSet(cardSet: string): Promise<Card[]> {
    return await this.cardRepository.getCardSet(cardSet);
  }
}
