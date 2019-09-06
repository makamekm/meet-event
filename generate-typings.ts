import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./api/**/*.gql'],
  path: join(process.cwd(), 'api/shared/graphql.ts'),
  outputAs: 'interface',
  watch: true,
});
