import { Component, OnInit } from '@angular/core';
import { MailinglistComponent } from '../dialogs/mailinglist/mailinglist.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.css']
})
export class BabyComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openMailingListDialog() {
    const d = this.dialog.open(MailinglistComponent, { minWidth: '280px', maxWidth: '640px',  autoFocus: false });
  }
}
