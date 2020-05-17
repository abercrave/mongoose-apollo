export const present = async (parent, { id }, { models: { Present } }) =>
  await Present.findById(id).populate('request').populate('provider');

export const presents = async (parent, args, { models: { Present } }) =>
  await Present.find().populate('request').populate('provider');

export default {
  Query: {
    present,
    presents,
  },
};
