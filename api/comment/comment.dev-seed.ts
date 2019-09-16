import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { CommentEntity } from './comment.entity';

export class SeedDevComment1568108033825 implements MigrationInterface {
  public async up(_: QueryRunner): Promise<any> {
    // await getRepository(CommentEntity).save({
    //   id: 0,
    // });
  }

  public async down(_: QueryRunner): Promise<any> {
    // do nothing
  }
}
