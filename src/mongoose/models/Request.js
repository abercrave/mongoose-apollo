import mongoose from 'mongoose';
import requestId from '../../helpers/requestId';

const schema = new mongoose.Schema({
  presents: [
    {
      type: mongoose.ObjectId,
      ref: 'Present',
    },
  ],
  requestId: {
    type: String,
    default: () => requestId(),
  },
});

const Request = mongoose.model('Request', schema);

export default Request;
