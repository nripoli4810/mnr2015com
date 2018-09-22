import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpDialogComponent implements OnInit {
  selectedLocation: string;
  selectedAnswer: string;

  constructor() { }

  ngOnInit() {
  }

}
