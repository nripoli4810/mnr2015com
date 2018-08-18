import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    console.log("toggle called");
    // this.isNavVisible = !this.isNavVisible;
    // if (this.isNavVisible) {
    //   this.open.emit(null);
    // } else {
    //   this.close.emit(null);
    // }
  }
}
