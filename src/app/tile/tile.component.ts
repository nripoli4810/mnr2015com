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
      avatar: '',
      content: 'This is some short content.'
    },
    {
      id: 1,
      title: 'Blog',
      subtitle: 'where the goods are',
      avatar: '',
      content: 'This is some short content.'
    },
    {
      id: 1,
      title: 'Dev/Staging',
      subtitle: 'Subtitle',
      avatar: '',
      content: 'This is some short content.'
    },
    
  ]
  tile: Tile = {
    id: 1,
    title: 'Test',
    subtitle: 'Subtitle',
    avatar: '',
    content: 'This is some short content.'
  };

  constructor() { }

  ngOnInit() {
  }

}
