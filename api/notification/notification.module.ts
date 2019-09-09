import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationEntity } from './notification.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([NotificationEntity]),
  ],
  // controllers: [NotificationController],
  // providers: [NotificationService, JwtStrategy],
  // exports: [NotificationService, JwtStrategy],
})
export class NotificationModule {}
