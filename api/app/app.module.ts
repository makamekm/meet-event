import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { CardModule } from '../card/card.module';
import { CommentModule } from '../comment/comment.module';
import { EventModule } from '../event/event.module';
import { GamificationModule } from '../gamification/gamification.module';
import { NotificationModule } from '../notification/notification.module';
import { SettingsModule } from '../settings/settings.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      path: process.env.IS_SEPARATE ? '/api/graphql' : '/graphql',
      autoSchemaFile: 'api/shared/schema.gql',
    }),
    DatabaseModule,
    AuthModule,
    CardModule,
    CommentModule,
    EventModule,
    GamificationModule,
    NotificationModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
