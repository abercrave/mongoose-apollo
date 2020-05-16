export const present = async (parent, { id }, { models: { Present } }) =>
  await Present.findById(id).populate('request').populate('provider');

export const presents = (parent, args, { models: { Present } }) =>
  Present.find().populate('request').populate('provider');

export default {
  Query: {
    present,
    presents,
  },
};
