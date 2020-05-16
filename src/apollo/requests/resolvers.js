export const request = async (parent, { id }, { models: { Request } }) =>
  await Request.findById(id).populate({
    path: 'presents',
    populate: { path: 'provider' },
  });

export const requests = (parent, args, { models: { Request } }) =>
  Request.find().populate({
    path: 'presents',
    populate: { path: 'provider' },
  });

export default {
  Query: {
    request,
    requests,
  },
};
