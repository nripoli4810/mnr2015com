import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shower } from '../models/shower';
import { MockShowers } from '../mock/shower';

@Injectable({
  providedIn: 'root'
})
export class BabyService {

  constructor() { }

  GetShowerInformation(): Observable<Shower[]> {
    return of (MockShowers);
  }
}
