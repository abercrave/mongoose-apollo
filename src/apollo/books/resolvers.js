import logger from '../../services/logger';

export const book = async (parent, { id }, { models: { book } }) => await book.findById(id);

export const books = (parent, args, { models: { book } }) => book.find();

export const createBook = async (parent, { input }, { models: { book } }) =>
  await book.create(input);

export default {
  Query: {
    book,
    books,
  },
  Mutation: {
    createBook,
  },
};
