import GMR from 'graphql-merge-resolvers';
import authors from './authors/resolvers';
import books from './books/resolvers';

export default GMR.merge([authors, books]);
