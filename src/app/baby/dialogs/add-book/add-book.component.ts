import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookDialogComponent implements OnInit {
  iFrameSrc = 'https://docs.google.com/forms/d/e/1FAIpQLSehk1Y989sqALOoZq8x9Or9xJ-shFTDImrH7bXSF6xLIIhSGg/viewform?embedded=true';

  constructor(
    private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  getSafeiFrameSource() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.iFrameSrc);
  }
}

// TODO : On smaller devices, the close button creates its own column.
