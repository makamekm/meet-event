import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannedUserEntity } from './banned-user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BannedUserEntity]),
  ],
  // controllers: [SettingsController],
  // providers: [SettingsService, JwtStrategy],
  // exports: [SettingsService, JwtStrategy],
})
export class SettingsModule {}
