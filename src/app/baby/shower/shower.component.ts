import { Component, OnInit } from '@angular/core';
import { Shower } from '../../models/shower';
import { MatDialog } from '@angular/material';
import { AddBookDialogComponent } from '../dialogs/add-book/add-book.component';
import { RsvpDialogComponent } from '../dialogs/rsvp/rsvp.component';
import { ShowerService } from '../../services/shower.service';

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
  styleUrls: ['./shower.component.css']
})
export class ShowerComponent implements OnInit {
  private publicShowerId = '1B41D0edqWkfS_SyPwoTNIK9L83G1bixNQvXbimDXkzc';
  showers: Shower[];

  constructor(
    public dialog: MatDialog,
    private showerService: ShowerService) {
  }

  ngOnInit() {
    this.showerService.GetShowers(this.publicShowerId, 1)
      .subscribe(showers => this.showers = showers);
  }

  openBookDialog() {
    const d = this.dialog.open(AddBookDialogComponent, { minWidth: '280px', maxWidth: '640px',  autoFocus: false });
  }

  showRSVPDialog() {
    const d = this.dialog.open(RsvpDialogComponent, { minWidth: '280px', maxWidth: '500px',  autoFocus: false });
  }
}
