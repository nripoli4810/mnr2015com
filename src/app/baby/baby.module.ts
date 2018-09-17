import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BabyComponent } from './welcome/baby.component';
import { MatGridListModule, MatListModule, MatButtonModule, MatExpansionModule,
  MatTabsModule, MatDialogModule, MatInputModule, MatIconModule } from '@angular/material';
import { SharedComponentsModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ShowerComponent } from './shower/shower.component';
import { RegistryComponent } from './registry/registry.component';
import { BabyLandingComponent } from './baby-landing/baby-landing.component';
import { RouterModule } from '@angular/router';
import { BabyNavigationComponent } from './baby-navigation/baby-navigation.component';
import { BabyRoutingModule } from './baby-routing/baby-routing.module';
import { AnnouncementComponent } from './announcement/announcement.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'angular2-carousel';
import { BookViewComponent } from './book-view/book-view.component';
import { AddBookDialogComponent } from './dialogs/add-book/add-book.component'
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    MatGridListModule, MatListModule, MatButtonModule, MatExpansionModule, MatTabsModule, MatDialogModule, MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    SharedComponentsModule,
    RouterModule,
    BabyRoutingModule,
    CarouselModule
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
  ],
  exports: [BabyComponent],
  entryComponents: [
    AddBookDialogComponent
  ]
})
export class BabyModule { }
