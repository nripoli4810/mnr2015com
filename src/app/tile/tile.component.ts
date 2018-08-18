import { Component, OnInit } from '@angular/core';
import { MockTiles } from '../tile/mock-tiles'
import { Tile } from './tile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  mockTiles: Tile[];

  constructor() {
    this.mockTiles = MockTiles;}

  ngOnInit() {
  }

}
