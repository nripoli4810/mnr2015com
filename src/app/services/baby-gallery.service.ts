import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Slide } from '../models/slide';
import { MockSlides } from '../mock/slides';

@Injectable({
  providedIn: 'root'
})
export class BabyGalleryService {
  urlBase = 'https://spreadsheets.google.com/feeds/list/';
  urlAppend = '/public/values?alt=json';

  private data: any = null;

  constructor(private http: HttpClient) { }

  GetBabyGalleryPhotos(id, sheetNumber): Observable<Slide[]> {
    const url = this.urlBase + id + '/' + sheetNumber + this.urlAppend;
    const _headers = new HttpHeaders();
    _headers.append('Access-Control-Allow-Origin', '*');

    const slides: Slide[] = [];
    this.http.get(url, { headers: _headers, })
    .subscribe(result => {
      this.data = result['feed']['entry'];

      if (this.data && this.data.length > 0) {
        const obj = {};

        this.data.forEach((entry, index) => {
          for (let x in entry) {
            obj[x.split('$')[1]] = entry[x]['$t'];
          }

          slides.push(new Slide(obj['src'], obj['description'], obj['order']));
        });
      }
      console.log(slides);
      slides.sort((a, b) => a.order.localeCompare(b.order));
    });

    return of(slides);
  }

  GetMockBabyGalleryPhotos(): Observable<Slide[]> {
    return of (MockSlides);
  }
}
