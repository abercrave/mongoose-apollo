import 'dotenv/config.js';
import connection from './connection';
import Request from './models/Request';
import Present from './models/Present';
import { presents as presentsData, requests as requestsData } from './seed-data.json';
import logger from '../services/logger';

connection.once('open', async () => {
  logger.info('🔌 Database connected.');

  logger.info('Removing existing records...');

  try {
    await Promise.all([Request.deleteMany({}), Present.deleteMany({})]);
    logger.info('✅ Done!');
  } catch (error) {
    logger.info('❌ Nothing to remove.');
  }

  logger.info('Adding new records...');

  try {
    for (const { presents } of requestsData) {
      const request = new Request({
        presents: [],
      });

      if (presents.length) {
        for (const presentId of presents) {
          const { division } = presentsData.find(present => present.id === presentId);

          const present = new Present({
            request: request._id,
            division,
          });

          request.presents.push(present);
        }
      }

      await request.save();

      for (const present of request.presents) {
        await present.save();
      }
    }

    logger.info('✅ Data seeding complete!');
    process.exit(0);
  } catch (error) {
    logger.error(`❌ Seeding failed with the error '${error}'`);
    process.exit(1);
  }
});
