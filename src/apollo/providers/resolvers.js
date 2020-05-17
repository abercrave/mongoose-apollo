export const provider = async (parent, { id }, { models: { Provider } }) =>
  await Provider.findById(id);

export const providers = async (parent, args, { models: { Provider } }) => await Provider.find();

export const providersWithPresents = async (parent, args, { models: { Present } }) =>
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
      $unwind: {
        path: '$request',
      },
    },
    {
      $group: {
        _id: '$provider._id',
        name: {
          $first: '$provider.name',
        },
        presents: {
          $addToSet: {
            division: '$division',
            request: '$request',
          },
        },
      },
    },
    {
      $project: {
        'presents.request.presents': 0,
      },
    },
    {
      $sort: {
        name: 1,
      },
    },
  ]);

export default {
  Query: {
    provider,
    providers,
    providersWithPresents,
  },
};
