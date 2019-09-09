import crypto from 'crypto';

function getPassword(password: string) {
  return crypto.createHash('md5').update(password).digest('hex');
}

export const UserEntitySeed = [
  {
    email: 'dev@dev.com',
    first_name: 'Local',
    last_name: 'Developer',
    password: getPassword('dev'),
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
];

import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { UserEntity } from './user.entity';

export class SeedPermissionsAndRoles1556357483083
  implements MigrationInterface {
  public async up(_: QueryRunner): Promise<any> {
    await getRepository(UserEntity).save(UserEntitySeed);
  }

  public async down(_: QueryRunner): Promise<any> {
    // do nothing
  }
}
