import mongoose from 'mongoose';

const providerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Provider = mongoose.model('Provider', providerSchema);

export default Provider;
