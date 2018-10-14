import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BabyBook } from '../models/book';
import { MockBooks } from '../mock/mockBook';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  urlBase = 'https://spreadsheets.google.com/feeds/list/'
  urlAppend = '/public/values?alt=json'

  private data: any = null

  constructor(private http: HttpClient) { }

  GetBooks(id, sheetNumber): Observable<BabyBook[]> {
    const url = this.urlBase + id + '/' + sheetNumber + this.urlAppend;
    const _headers = new HttpHeaders();
    _headers.append('Access-Control-Allow-Origin', '*');

    const babyBooks: BabyBook[] = [];
    this.http.get(url, { headers: _headers, })
      .subscribe(result => {
        this.data = result['feed']['entry'];

        if (this.data && this.data.length > 0) {
          let obj = {};

          this.data.forEach((entry, index) => {
            for (const x in entry) {
              obj[x.split('$')[1]] = entry[x]['$t'];
            }

            babyBooks.push(new BabyBook(obj['title'], obj['author']));
          });
        }
        babyBooks.sort((a, b) => a.title.localeCompare(b.title));
      });

    return of(babyBooks);
  }

  GetMockBooks(): Observable<BabyBook[]> {
    return of (MockBooks);
  }
}
