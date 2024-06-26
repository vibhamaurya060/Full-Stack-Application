
import { Router } from "express";
import Book from "../models/book.js";
import multer from "multer";
import storage from "../middleware/upload.js";

const upload = multer({ storage: storage});

const bookRouter = Router();


bookRouter.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).send(err.message)
    }
});

bookRouter.post('/upload', upload.array('images'), (req, res) => {
  const files = req.files.map(file => file.path);
  res.json({ files });
});

bookRouter.post('/',async (req, res) => {
  try {
    const { title, author, pages } = req.body;
    const frontCover = req.files.frontCover[0].path;
    const backCover = req.files.backCover[0].path;

    const newBook = new Book({
      title,
      author,
      frontCover,
      backCover,
      pages: JSON.parse(pages)
    });

    await newBook.save();
    res.json(newBook);
  }
  catch(err){
    res.status(500).send(err.message)
  }
  });
  

  bookRouter.get('/download/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
  
    const filePath = `public/books/${book._id}.pdf`;
    await generatePDF(book, filePath);
    res.download(filePath);
  });

export default bookRouter;
