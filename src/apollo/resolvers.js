import GMR from 'graphql-merge-resolvers';
import books from './books/resolvers';

export default GMR.merge([books]);
