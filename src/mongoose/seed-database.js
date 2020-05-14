import 'dotenv/config.js';
import connection from './connection';
import Author from './models/Author';
import Book from './models/Book';
import { authors } from './seed-data.json';
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
    for (const { name, books } of authors) {
      const author = await new Author({
        books: [],
        name,
      });

      if (books.length) {
        for (const { title } of books) {
          const book = await new Book({
            author: author.id,
            title,
          });

          author.books.push(book);
        }
      }

      await author.save();

      for (const book of author.books) {
        await book.save();
      }
    }

    logger.info('✅ Data seeding complete!');
    process.exit(0);
  } catch (error) {
    logger.error(`❌ Seeding failed with the error '${error}'`);
    process.exit(1);
  }
});
