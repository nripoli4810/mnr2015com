import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Tile } from '../tile/tile';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [
    HomeService,
  ]
})
export class NavigationComponent implements OnInit {
  opened: boolean;
  featuredTiles: Tile[];
  menuTiles: any;

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.GetHomeTiles()
      .subscribe(tiles => this.featuredTiles = tiles.filter(t => t.featured));
    this.homeService.GetHomeTiles()
      .subscribe(tiles => this.menuTiles = tiles.filter(t => !t.hidden));
  }

  toggle() {
    this.opened = !this.opened;
  }
}
