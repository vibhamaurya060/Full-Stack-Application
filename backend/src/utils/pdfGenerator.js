import PDFDocument from 'pdfkit';
import fs from 'fs';

export const generatePDF = (book, filePath) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // Front cover
    doc.image(book.frontCover, 0, 0, { width: doc.page.width, height: doc.page.height });
    doc.fontSize(30).text(book.title, 100, 50);
    doc.fontSize(20).text(book.author, 100, 100);
    doc.addPage();

    // Internal pages
    book.internalPages.forEach(page => {
      doc.image(page, 0, 0, { width: doc.page.width, height: doc.page.height });
      doc.addPage();
    });

    // Back cover
    doc.image(book.backCover, 0, 0, { width: doc.page.width, height: doc.page.height });

    doc.end();

    stream.on('finish', () => resolve());
    stream.on('error', (err) => reject(err));
  });
};
