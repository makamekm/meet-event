import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from '../event/event.entity';

@Injectable()
export class EventSelectService {
  constructor(
    @InjectRepository(EventEntity) private readonly eventRepository: Repository<EventEntity>,
  ) {}

  public async selectOne(id: number) {
    return await this.eventRepository.findOneOrFail(id);
  }
}
