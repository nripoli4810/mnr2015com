import { Component, OnInit, isDevMode } from '@angular/core';
import { BookService } from '../../services/book.service';
import { MatSpinner, MatDialog } from '@angular/material';
import { BabyBook } from '../../models/book';
import { AddBookDialogComponent } from '../dialogs/add-book/add-book.component';

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

  constructor(private bookService: BookService,
    public dialog: MatDialog) { }

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

  openBookDialog() {
    const d = this.dialog.open(AddBookDialogComponent, { minWidth: '280px', maxWidth: '640px',  autoFocus: false });
  }
}
