import { Repository, EntityRepository } from 'typeorm';
import { Card } from './entity/card.entity';

@EntityRepository(Card)
export class CardRepository extends Repository<Card> {
  async getCardSet(cardSet: string): Promise<Card[]> {
    return await this.createQueryBuilder('card')
      .innerJoinAndSelect(
        'card.cardSet',
        'cardSet',
        'cardSet.short_name = :name',
        { name: cardSet },
      )
      .getMany();
  }
}
