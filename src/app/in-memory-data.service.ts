import {InMemoryDbService} from 'angular-in-memory-web-api';

import {Book} from './book';

export class InMemoryDataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} {
    const books = [
      { id: 11, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
      { id: 12, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      { id: 13, title: 'The Giver', author: 'Lois Lowry' },
      { id: 14, title: 'Lord of the Flies', author: 'William Golding' },
      { id: 15, title: 'The Outsiders', author: 'S.E. Hinton' },
      { id: 16, title: 'The Hobbit or There and Back Again', author: 'J.R.R. Tolkien' },
      { id: 17, title: 'Fahrenheit 451', author: 'Ray Bradbury' },
      { id: 18, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
      { id: 19, title: 'Of Mice and Men', author: 'John Steinbeck' },
      { id: 20, title: 'Nineteen Eighty-Four', author: 'George Orwell' },
    ];
    return { books };
  }

  // Overrides the genId method to ensure that a book always has an id.
  // If the books array is empty,
  // the method below returns the initial number (11).
  // if the books array is not empty, the method below returns the highest
  // book id + 1.
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }
}
