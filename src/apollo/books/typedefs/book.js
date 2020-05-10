import gql from 'graphql-tag';

export default gql`
  type Book {
    _id: ID!
    title: String!
    author: String!
  }

  input BookInput {
    title: String!
    author: String!
  }

  extend type Query {
    book(id: ID!): Book
    books: [Book]!
  }

  extend type Mutation {
    createBook(input: BookInput!): Book
  }
`;
