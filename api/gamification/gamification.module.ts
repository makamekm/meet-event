import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventScoreEntity } from './event-score.entity';
import { ScoreEntity } from './score.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventScoreEntity, ScoreEntity]),
  ],
  // controllers: [GamificationController],
  // providers: [GamificationService, JwtStrategy],
  // exports: [GamificationService, JwtStrategy],
})
export class GamificationModule {}
