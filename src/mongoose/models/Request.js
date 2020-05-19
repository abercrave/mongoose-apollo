import mongoose from 'mongoose';
import requestId from '../../helpers/requestId';

const requestSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
  },
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

const Request = mongoose.model('Request', requestSchema);

export default Request;
