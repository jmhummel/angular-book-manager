import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  add(title: string, author: string, description: string): void {
    title = title.trim();
    author = author.trim();
    description = description.trim();

    if (!title && !author && !description) { return; }

    this.bookService.addBook({ title: title, author: author, description: description } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }

  delete(book: Book): void {
    this.books = this.books.filter(b => b !== book);
    this.bookService.deleteBook(book).subscribe();
  }
}
