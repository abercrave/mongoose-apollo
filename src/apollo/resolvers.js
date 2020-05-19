import { DateTimeResolver } from 'graphql-scalars';
import GMR from 'graphql-merge-resolvers';
import presents from './presents/resolvers';
import providers from './providers/resolvers';
import requests from './requests/resolvers';

const baseResolvers = {
  DateTime: DateTimeResolver,
};

export default GMR.merge([baseResolvers, presents, providers, requests]);
