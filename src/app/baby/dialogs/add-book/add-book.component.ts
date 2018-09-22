import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookDialogComponent implements OnInit {
  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {}
}
