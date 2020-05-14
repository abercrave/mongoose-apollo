import 'dotenv/config.js';
import connection from './connection';
import Author from '../mongoose/models/Author';
import Book from '../mongoose/models/Book';
import logger from '../services/logger';

connection.once('open', async () => {
  logger.info('🔌 Database connected.');
  logger.info('Removing existing records...');

  try {
    await Promise.all([Author.deleteMany({}), Book.deleteMany({})]);
    logger.info('✅ Done!');
  } catch (error) {
    logger.info('❌ Nothing to remove.');
  }

  logger.info('Adding new records...');

  try {
    const author1 = await new Author({
      books: [],
      name: 'Iain M. Banks',
    });

    const author2 = await new Author({
      books: [],
      name: 'Mark Lawrence',
    });

    const book1 = await new Book({
      author: author1.id,
      title: 'Consider Phlebas',
    });

    const book2 = await new Book({
      author: author1.id,
      title: 'Use of Weapons',
    });

    const book3 = await new Book({
      author: author2.id,
      title: 'Prince of Thorns',
    });

    await Promise.all([
      author1.books.push(book1),
      author1.books.push(book2),
      author2.books.push(book3),

      author1.save(),
      author2.save(),

      book1.save(),
      book2.save(),
      book3.save(),
    ]);

    logger.info('✅ Data seeding complete!');
    process.exit(0);
  } catch (error) {
    logger.error(`❌ Seeding failed with the error '${error}'`);
    process.exit(1);
  }
});
