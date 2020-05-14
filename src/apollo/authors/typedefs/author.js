import gql from 'graphql-tag';

export default gql`
  type Author {
    id: ID!
    name: String
    books: [Book]!
  }

  extend type Query {
    author(id: ID!): Author
    authors: [Author]!
  }
`;
