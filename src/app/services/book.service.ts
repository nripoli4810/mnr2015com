import { Injectable } from '@angular/core';
import { BabyBook } from '../models/book';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookServiceUrl = 'https://script.google.com/macros/s/AKfycbzarbZQ7mG7PZUAA6cp2QyPcVZE6MGp5N2N2CyxIBCb7fmc7jds/exec';

  constructor(private http: HttpClient) { }

  AddBook(book: BabyBook) {

  }

  // GetBooks(): Observable<BabyBook[]> {
  //   // return
  // }
}
