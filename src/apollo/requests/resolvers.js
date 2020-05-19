export const request = async (parent, { id }, { models: { Request } }) =>
  await Request.findById(id).populate({
    path: 'presents',
    populate: { path: 'provider' },
  });

export const requests = async (parent, args, { models: { Request } }) =>
  await Request.find().populate({
    path: 'presents',
    populate: { path: 'provider' },
  });

export const requestsWithPresents = async (parent, args, { models: { Present } }) =>
  await Present.aggregate([
    {
      $lookup: {
        from: 'providers',
        localField: 'provider',
        foreignField: '_id',
        as: 'provider',
      },
    },
    {
      $unwind: {
        path: '$provider',
      },
    },
    {
      $lookup: {
        from: 'requests',
        localField: 'request',
        foreignField: '_id',
        as: 'request',
      },
    },
    {
      $match: {
        request: {
          $exists: true,
        },
      },
    },
    {
      $unwind: {
        path: '$request',
      },
    },
    {
      $group: {
        _id: '$request._id',
        createdAt: {
          $first: '$request.createdAt',
        },
        presents: {
          $addToSet: {
            _id: '$_id',
            division: '$division',
            provider: '$provider',
          },
        },
        requestId: {
          $first: '$request.requestId',
        },
      },
    },
    {
      $project: {
        'request.presents': 0,
      },
    },
    {
      $sort: {
        createdAt: 1,
      },
    },
  ]);

export default {
  Query: {
    request,
    requests,
    requestsWithPresents,
  },
};
