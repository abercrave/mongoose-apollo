import mongoose from 'mongoose';

const presentSchema = new mongoose.Schema({
  division: {
    type: String,
    required: true,
  },
  provider: {
    type: mongoose.ObjectId,
    ref: 'Provider',
  },
  request: {
    type: mongoose.ObjectId,
    ref: 'Request',
  },
});

const Present = mongoose.model('Present', presentSchema);

export default Present;
