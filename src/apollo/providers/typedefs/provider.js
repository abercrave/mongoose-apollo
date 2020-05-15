import gql from 'graphql-tag';

export default gql`
  type Provider {
    _id: ID!
    name: String
  }

  extend type Query {
    provider(id: ID!): Provider
    providers: [Provider]!
  }
`;
