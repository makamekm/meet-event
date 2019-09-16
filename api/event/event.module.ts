import { Module } from '@nestjs/common';
import { EventEntity } from './event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventUserEntity } from './event-user.entity';
import { EventAddressEntity } from './event-address.entity';
import { EventSelectService } from './event-select.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventEntity, EventUserEntity, EventAddressEntity]),
  ],
  providers: [
    EventSelectService,
  ],
  exports: [
    EventSelectService,
  ],
})
export class EventModule {}
