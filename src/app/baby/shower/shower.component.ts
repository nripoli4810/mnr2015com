import { Component, OnInit } from '@angular/core';
import { Shower } from '../../models/shower';
import { BabyService } from '../../services/baby.service';
import { MatDialog } from '@angular/material';
import { AddBookDialogComponent } from '../dialogs/add-book/add-book.component';
import { Http, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
  styleUrls: ['./shower.component.css']
})
export class ShowerComponent implements OnInit {
  mockShowers: Shower[];

  constructor(private babyService: BabyService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.babyService.GetShowerInformation()
      .subscribe(showers => this.mockShowers = showers);
  }

  openBookDialog() {
      const d = this.dialog.open(AddBookDialogComponent, { minWidth: '320px', maxWidth: '640px' });
  }
}
