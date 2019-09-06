import { createConnection } from 'typeorm';

export const databaseProviders = [
  process.env.NODE_ENV === 'production' ? {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
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
    }),
  } : {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'sqlite',
      database: ':memory:',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];
