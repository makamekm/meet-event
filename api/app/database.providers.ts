import { ConnectionOptions } from 'typeorm';

export const databaseProviders: ConnectionOptions = process.env.NODE_ENV === 'production' ? {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: [
    __dirname + '/../**/*.entity{.ts,.js}',
  ],
  synchronize: true,
} : {
  type: 'sqlite',
  database: ':memory:',
  entities: [
    __dirname + '/../**/*.entity{.ts,.js}',
  ],
  synchronize: true,
  // migrations: [
  //   '/../**/*.seeds.ts'
  // ],
  // migrationsRun: true,
};
