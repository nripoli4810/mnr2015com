import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule, MatListModule, MatButtonModule, MatExpansionModule,
  MatTabsModule, MatDialogModule, MatInputModule, MatIconModule, MatSelectModule, MatRadioModule, MatFormFieldModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SharedComponentsModule } from '../shared/shared.module';
import { BabyComponent } from './welcome/baby.component';
import { ShowerComponent } from './shower/shower.component';
import { RegistryComponent } from './registry/registry.component';
import { BabyLandingComponent } from './baby-landing/baby-landing.component';
import { BabyNavigationComponent } from './baby-navigation/baby-navigation.component';
import { BabyRoutingModule } from './baby-routing/baby-routing.module';
import { AnnouncementComponent } from './announcement/announcement.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'angular2-carousel';
import { BookViewComponent } from './book-view/book-view.component';
import { AddBookDialogComponent } from './dialogs/add-book/add-book.component';
import { MailingListDialogComponent } from './dialogs/mailinglist/mailinglist.component';
import { RsvpDialogComponent } from './dialogs/rsvp/rsvp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    MatGridListModule, MatListModule, MatButtonModule, MatExpansionModule, MatTabsModule, MatDialogModule, MatInputModule,
    MatSelectModule, MatRadioModule, MatIconModule, MatProgressSpinnerModule, MatCardModule,
    FlexLayoutModule,
    SharedComponentsModule,
    FormsModule,
    RouterModule,
    BabyRoutingModule,
    CarouselModule,
  ],
  declarations: [
    AddBookDialogComponent,
    BabyComponent,
    ShowerComponent,
    RegistryComponent,
    BabyLandingComponent,
    BabyNavigationComponent,
    AnnouncementComponent,
    SliderComponent,
    BookViewComponent,
    MailingListDialogComponent,
    RsvpDialogComponent,
  ],
  exports: [BabyComponent],
  entryComponents: [
    AddBookDialogComponent,
    MailingListDialogComponent,
    RsvpDialogComponent
  ]
})
export class BabyModule { }
