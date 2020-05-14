import { ObjectId, Schema, model } from 'mongoose';

const authorSchema = new Schema({
  books: [
    {
      type: ObjectId,
      ref: 'Book',
    },
  ],
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Author = model('Author', authorSchema);

export default Author;
