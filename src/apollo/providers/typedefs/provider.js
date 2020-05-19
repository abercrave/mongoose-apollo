import gql from 'graphql-tag';

export default gql`
  type Provider {
    _id: ID!
    name: String
    presents: [Present]
  }

  extend type Query {
    provider(id: ID!): Provider
    providers: [Provider]!
    groupPresentsByProvider: [Provider]!
  }
`;
