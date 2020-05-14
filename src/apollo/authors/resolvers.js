import books from '../books/resolvers';

export const author = async (parent, { id }, { models: { Author } }) =>
  await Author.findById(id).populate('books');

export const authors = (parent, args, { models: { Author } }) => Author.find().populate('books');

export default {
  Query: {
    author,
    authors,
  },
};
