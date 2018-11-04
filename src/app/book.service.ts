import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Book } from './book';
import { BOOKS } from './mock-books';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class BookService {

  constructor(private messageService: MessageService) { }

  getBooks(): Observable<Book[]> {
    // TODO: send the message _after_ fetching the books
    this.messageService.add('BookService: fetched books');
    return of(BOOKS);
  }

  getBook(id: number): Observable<Book> {
    // TODO: send the message _after_ fetching the book
    this.messageService.add(`BookService: fetched book id=${id}`);
    return of(BOOKS.find(book => book.id === id));
  }
}
