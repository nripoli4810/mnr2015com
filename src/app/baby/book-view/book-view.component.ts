import { Component, OnInit, isDevMode } from '@angular/core';
import { BookService } from '../../services/book.service';
import { MatSpinner } from '@angular/material';
import { BabyBook } from '../../models/book';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  private publicBookId = '1cPx97G4CgSx15znkAlc7MNjEjo8Tsc1b77gbtFWOQGI';
  bookViewSpinner: MatSpinner;
  books: BabyBook[];
  searchText: string;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    // if (isDevMode()) {
    //   console.log("In dev mode, retrieving stored books!");
    //   this.bookService.GetMockBooks()
    //     .subscribe(b => {
    //       this.books = b;
    //     });
    // } else {
      this.bookService.GetBooks(this.publicBookId, 1)
        .subscribe(returnedBooks => {
          this.books = returnedBooks;
        });
    // }
  }
}
