import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import Author from './authors/typedefs/author';
import Book from './books/typedefs/book';

const baseTypeDefs = gql`
  # Empty fields obligatory
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export default makeExecutableSchema({
  typeDefs: [baseTypeDefs, Author, Book],
  resolvers,
});
