import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BabyComponent } from './welcome/baby.component';
import { MatGridListModule, MatListModule, MatButtonModule, MatExpansionModule, MatTabsModule } from '@angular/material';
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
import { BookViewComponent } from './book-view/book-view.component'

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule, MatListModule, MatButtonModule, MatExpansionModule, MatTabsModule,
    SharedComponentsModule,
    FlexLayoutModule,
    RouterModule,
    BabyRoutingModule,
    CarouselModule
  ],
  declarations: [
    BabyComponent,
    ShowerComponent,
    RegistryComponent,
    BabyLandingComponent,
    BabyNavigationComponent,
    AnnouncementComponent,
    SliderComponent,
    BookViewComponent],
  exports: [BabyComponent]
})
export class BabyModule { }
