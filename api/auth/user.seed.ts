import crypto from 'crypto';
import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserAddressEntity } from './user-address.entity';
import { ScoreEntity } from '../gamification/score.entity';

function getPassword(password: string) {
  return crypto.createHash('md5').update(password).digest('hex');
}

export class SeedUser1568108033825 implements MigrationInterface {
  public async up(_: QueryRunner): Promise<any> {
    await getRepository(UserEntity).save({
      id: 0,
      email: 'admin@event.com',
      first_name: 'Main',
      last_name: 'Administrator',
      password: getPassword(process.env.ADMIN_PASSWORD || 'dev'),
      contact_information: 'admin@event.com',
      addresses: [
        await getRepository(UserAddressEntity).save({
          country: 'Russia',
          latitude: 54.9179562,
          longitude: 37.4229963,
          primary: true,
        }),
      ],
      recommend_genres: [],
      score: await getRepository(ScoreEntity).save({
        score: 0,
      }),
      cards: [],
    });
  }

  public async down(_: QueryRunner): Promise<any> {
    // do nothing
  }
}
