import { BooksService } from './books.service';
import { CreateBooksDto } from './dto/create-books.dto';
import { BookInterface } from 'src/books/interfaces/book.interface';
export declare class BooksController {
    private readonly bookService;
    constructor(bookService: BooksService);
    getBooks(): Promise<BookInterface[]>;
    createBook(book: CreateBooksDto): void;
}
