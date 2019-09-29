import { Controller, Get, Post, Query, Param } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private cardService: CardService) {}

  @Get('/cardset/:set')
  async getCardSet(@Param('set') cardSet: string) {
    return await this.cardService.getCardSet(cardSet);
  }

  @Post('/createDummyCards')
  async createDummyCards(): Promise<string> {
    await this.cardService.createDummyCards();
    return 'done';
  }
}
