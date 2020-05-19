import gql from 'graphql-tag';

export default gql`
  type Request {
    _id: ID!
    createdAt: DateTime
    presents: [Present]!
    requestId: String
  }

  extend type Query {
    request(id: ID!): Request
    requests: [Request]!
    requestsWithPresents: [Request]!
  }
`;
