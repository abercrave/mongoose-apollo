import GMR from 'graphql-merge-resolvers';
import presents from './presents/resolvers';
import providers from './providers/resolvers';
import requests from './requests/resolvers';

export default GMR.merge([presents, providers, requests]);
