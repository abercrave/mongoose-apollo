import presents from '../presents/resolvers';

export const request = async (parent, { id }, { models: { Request } }) =>
  await Request.findById(id).populate('presents');

export const requests = (parent, args, { models: { Request } }) =>
  Request.find().populate('presents');

export default {
  Query: {
    request,
    requests,
  },
};
