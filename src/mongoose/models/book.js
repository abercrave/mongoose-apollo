import { ObjectId, Schema, model } from 'mongoose';

const bookSchema = new Schema({
  author: {
    type: ObjectId,
    ref: 'Author',
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

const Book = model('Book', bookSchema);

export default Book;
