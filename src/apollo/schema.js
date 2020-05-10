import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import book from './books/typedefs/book';

const baseTypeDefs = gql`
  type Query {
    # Empty field obligatory
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export default makeExecutableSchema({
  typeDefs: [baseTypeDefs, book],
  resolvers,
});
