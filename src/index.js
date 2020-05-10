import 'dotenv/config.js';
import bodyParser from 'body-parser';
import express from 'express';
import apollo from './apollo/server';
import connection from './mongoose/connection';
import logger from './services/logger';

connection.on('error', () => {
  logger.error('Database connection error... 😕');
  return;
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

apollo.applyMiddleware({ app });

connection.once('open', () => {
  logger.info('Database connected.');

  app.listen(process.env.PORT, () => {
    logger.info(`🚀 Server ready at http://localhost:${process.env.PORT}${apollo.graphqlPath}`);
  });
});
