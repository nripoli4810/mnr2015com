import { Component, OnInit } from '@angular/core';
import { Tile } from '../models/tile';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  featuredTiles: Tile[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.GetHomeTiles()
      .subscribe(tiles => this.featuredTiles = tiles.filter(t => t.featured));
  }

}
