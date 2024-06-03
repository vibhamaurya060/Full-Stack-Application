import {Schema, model}  from 'mongoose';

const bookSchema = new Schema({
  title: {type: String, required:true},
  author: {type: String, required:true},
  frontCover: {type: String},
  backCover: {type: String},
  internalPages: {type:[String]},
});

const Book = model('Book', bookSchema);

export default Book;
