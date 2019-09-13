import crypto from 'crypto';
import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserAddressEntity } from './user-address.entity';
import { Genre } from '../shared/genre/genre.structure';
import { ScoreEntity } from '../gamification/score.entity';

function getPassword(password: string) {
  return crypto.createHash('md5').update(password).digest('hex');
}

export class SeedDevUser1568108033825 implements MigrationInterface {
  public async up(_: QueryRunner): Promise<any> {
    await getRepository(UserEntity).save({
      id: 0,
      email: 'dev@dev.com',
      first_name: 'Local',
      last_name: 'Developer',
      password: getPassword('dev'),
      contact_information: '',
      addresses: [
        await getRepository(UserAddressEntity).save({
          country: 'Russia',
          latitude: 54.9179562,
          longitude: 37.4229963,
          primary: true,
        }),
      ],
      recommend_genres: [Genre.Football],
      score: await getRepository(ScoreEntity).save({
        score: 0,
      }),
      cards: [],
    });

    await getRepository(UserEntity).save({
      id: 1,
      email: 'speaker@dev.com',
      first_name: 'Local',
      last_name: 'Speaker',
      password: getPassword('dev'),
      contact_information: '',
      addresses: [
        await getRepository(UserAddressEntity).save({
          country: 'Russia',
          latitude: 54.9179562,
          longitude: 37.4229963,
          primary: true,
        }),
      ],
      recommend_genres: [Genre.Football, Genre.Volleyball],
      score: await getRepository(ScoreEntity).save({
        score: 100,
      }),
      cards: [],
    });

    await getRepository(UserEntity).save({
      id: 2,
      email: 'attender@dev.com',
      first_name: 'Local',
      last_name: 'Attender',
      password: getPassword('dev'),
      contact_information: '',
      addresses: [
        await getRepository(UserAddressEntity).save({
          country: 'Russia',
          latitude: 54.9179562,
          longitude: 37.4229963,
          primary: true,
        }),
      ],
      recommend_genres: [Genre.Football, Genre.Volleyball],
      score: await getRepository(ScoreEntity).save({
        score: 15,
      }),
      cards: [],
    });
  }

  public async down(_: QueryRunner): Promise<any> {
    // do nothing
  }
}
