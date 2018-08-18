import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile/tile';
import { MockTiles } from '../tile/mock-tiles'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  opened: boolean;
  mockTiles: Tile[];

  constructor() {
    this.mockTiles = MockTiles;
  }

  ngOnInit() {
  }

  toggle() {
    this.opened = !this.opened;
  }

}
