import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import Present from './presents/typedefs/present';
import Provider from './providers/typedefs/provider';
import Request from './requests/typedefs/request';

const baseTypeDefs = gql`
  scalar DateTime

  # Empty fields obligatory
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export default makeExecutableSchema({
  typeDefs: [baseTypeDefs, Present, Provider, Request],
  resolvers,
});
