// Imports
import { Router } from 'express';
import { BooksController } from '../controllers/books_controller';

// Instances
const books_router: Router =  Router();
const booksController: BooksController = new BooksController();

// Routes
books_router.get('/', booksController.index);
books_router.get('/add', booksController.renderFormBook);
books_router.post('/add', booksController.saveBook);

// Exporting books_router
export default books_router;