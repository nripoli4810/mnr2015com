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
    this.opened = true;
  }

  ngOnInit() {
  }

  toggle() {
    this.opened = !this.opened;
  }

  onMenuClick(t: Tile) {
    window.location.href = t.href;
  }

  filterDisabledMenuOptions(t: Tile) {
    return !t.hidden;
  }
}
