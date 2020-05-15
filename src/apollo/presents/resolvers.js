export const present = async (parent, { id }, { models: { Present } }) =>
  await Present.findById(id).populate('request');

export const presents = (parent, args, { models: { Present } }) =>
  Present.find().populate('request');

export default {
  Query: {
    present,
    presents,
  },
};
