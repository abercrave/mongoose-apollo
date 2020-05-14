const { ApolloServer } = require('apollo-server-express');
import schema from './schema';
import Author from '../mongoose/models/Author';
import Book from '../mongoose/models/Book';

export default new ApolloServer({
  schema,
  context: async ({ req }) => ({
    ...req,
    models: { Author, Book },
  }),
});
