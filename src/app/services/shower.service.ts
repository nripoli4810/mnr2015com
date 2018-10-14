import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Shower } from '../models/shower';

@Injectable({
  providedIn: 'root'
})
export class ShowerService {
  urlBase = 'https://spreadsheets.google.com/feeds/list/';
  urlAppend = '/public/values?alt=json';

  private data: any = null;

  constructor(private http: HttpClient) { }

  GetShowers(id, sheetNumber): Observable<Shower[]> {
    const url = this.urlBase + id + '/' + sheetNumber + this.urlAppend;
    const _headers = new HttpHeaders();
    _headers.append('Access-Control-Allow-Origin', '*');

    const showerResults: Shower[] = [];
    this.http.get(url, { headers: _headers, })
      .subscribe(result => {
        this.data = result['feed']['entry'];

        if (this.data && this.data.length > 0) {
          let obj = {};

          this.data.forEach((entry, index) => {
            for (const x in entry) {
              obj[x.split('$')[1]] = entry[x]['$t'];
            }

            showerResults.push(new Shower(obj['id'], obj['title'], obj['date'], obj['content'], obj['host']));
          });
        }
        showerResults.sort((a, b) => a.id.localeCompare(b.id));
        console.log(showerResults);
      });

    return of(showerResults);
  }
}
