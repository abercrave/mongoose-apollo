import gql from 'graphql-tag';

export default gql`
  type Request {
    _id: ID!
    presents: [Present]!
    requestId: String
  }

  extend type Query {
    request(id: ID!): Request
    requests: [Request]!
  }
`;
