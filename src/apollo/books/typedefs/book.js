import gql from 'graphql-tag';

export default gql`
  type Book {
    id: ID!
    author: Author
    title: String
  }

  extend type Query {
    book(id: ID!): Book
    books: [Book]!
  }
`;
