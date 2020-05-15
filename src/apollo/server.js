const { ApolloServer } = require('apollo-server-express');
import schema from './schema';
import Present from '../mongoose/models/Present';
import Provider from '../mongoose/models/Provider';
import Request from '../mongoose/models/Request';

export default new ApolloServer({
  schema,
  context: async ({ req }) => ({
    ...req,
    models: { Present, Provider, Request },
  }),
});
