import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Provider = mongoose.model('Provider', schema);

export default Provider;
