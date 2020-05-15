export const provider = async (parent, { id }, { models: { Provider } }) =>
  await Provider.findById(id);

export const providers = (parent, args, { models: { Provider } }) => Provider.find();

export default {
  Query: {
    provider,
    providers,
  },
};
