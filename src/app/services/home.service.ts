import { Injectable } from '@angular/core';
import { MockTiles } from '../mock/tiles';
import { Observable, of } from 'rxjs';
import { Tile } from '../models/tile';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  GetHomeTiles(): Observable<Tile[]> {
    return of (MockTiles);
  }
}
