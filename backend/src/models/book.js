import {Schema, model}  from 'mongoose';

const bookSchema = new Schema({
  title: {type: String},
  author: {type: String},
  frontCover: {type: String},
  backCover: {type: String},
  internalPages: {type:[String]},
});

const Book = model('Book', bookSchema);

export default Book;
