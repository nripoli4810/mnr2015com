import { Component, OnInit } from '@angular/core';
import { Tile } from './tile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  tiles: Tile[] = [
    {
      id: 1,
      title: 'Home',
      subtitle: 'where the food is',
      avatar: 'home',
      content: 'This is some short content.',
      href: ''
    },
    {
      id: 2,
      title: 'Blog',
      subtitle: 'where the goods are',
      avatar: '',
      content: 'This is some short content.',
      href: 'http://blog.mnr2015.com'
    },
    {
      id: 3,
      title: 'Dev/Staging',
      subtitle: 'Subtitle',
      avatar: '',
      content: 'This is some short content.',
      href: 'http://dev.mnr2015.com'
    },
    {
      id: 4,
      title: 'Expo',
      subtitle: 'Subtitle',
      avatar: '',
      content: 'This is some short content.',
      href: 'http://dev2.mnr2015.com'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
