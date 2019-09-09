import { Module } from '@nestjs/common';
import { EventEntity } from './event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventUserEntity } from './event-user.entity';
import { EventAddressEntity } from './event-address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventEntity, EventUserEntity, EventAddressEntity]),
  ],
  // controllers: [EventController],
  // providers: [EventService, JwtStrategy],
  // exports: [EventService, JwtStrategy],
})
export class EventModule {}
