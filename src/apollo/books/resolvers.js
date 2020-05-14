import author from '../authors/resolvers';

export const book = async (parent, { id }, { models: { Book } }) =>
  await Book.findById(id).populate('author');

export const books = (parent, args, { models: { Book } }) => Book.find().populate('author');

export default {
  Query: {
    book,
    books,
  },
};
