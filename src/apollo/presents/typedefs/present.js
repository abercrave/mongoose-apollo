import gql from 'graphql-tag';

export default gql`
  type Present {
    _id: ID!
    division: String
    provider: Provider
    request: Request
  }

  extend type Query {
    present(id: ID!): Present
    presents: [Present]!
  }
`;
