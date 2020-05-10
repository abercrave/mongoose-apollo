const { ApolloServer } = require('apollo-server-express');
import schema from './schema';
import models from '../mongoose/models';

export default new ApolloServer({
  schema,
  context: async ({ req }) => ({ models }),
});
