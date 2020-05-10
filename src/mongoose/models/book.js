import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  author: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'author',
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

const book = mongoose.model('book', bookSchema);

export default book;
