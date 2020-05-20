import 'dotenv/config.js';
import connection from './connection';
import Present from './models/Present';
import Provider from './models/Provider';
import Request from './models/Request';
import {
  presents as presentsData,
  providers as providersData,
  requests as requestsData,
} from './generated-data.js';
import logger from '../services/logger';

connection.once('open', async () => {
  logger.info('🔌 Database connected.');

  try {
    logger.info('Removing existing records...');

    await Promise.all([
      Present.collection.drop(),
      Provider.collection.drop(),
      Request.collection.drop(),
    ]);

    logger.info('Done!');
  } catch (error) {
    logger.info('❌ Nothing to remove:', error);
  }

  logger.info('Adding new records...');

  try {
    const providers = [];

    for (const { createdAt, presents } of requestsData) {
      const request = new Request({
        createdAt,
        presents: [],
      });

      if (presents.length) {
        for (const presentId of presents) {
          const { division, provider: providerId } = presentsData.find(
            present => present.id === presentId
          );

          const { name } = providersData.find(provider => provider.id === providerId);
          const existingProvider = name && providers.find(provider => provider.name === name);
          let provider;

          if (existingProvider) {
            provider = existingProvider;
          } else {
            provider = new Provider({
              name,
            });

            providers.push(provider);
          }

          const present = new Present({
            division,
            provider: provider._id,
            request: request._id,
          });

          request.presents.push(present);
        }
      }

      await request.save();

      for (const present of request.presents) {
        await present.save();
      }
    }

    for (const provider of providers) {
      await provider.save();
    }

    logger.info('Data seeding complete!');
    process.exit(0);
  } catch (error) {
    logger.error(`❌ Seeding failed with the error '${error}'`);
    process.exit(1);
  }
});
