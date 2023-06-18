import { BookInterface } from 'src/books/interfaces/book.interface';
export declare class BooksService {
    private readonly books;
    create(book: BookInterface): void;
    getBooks(): BookInterface[];
}
