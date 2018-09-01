import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BabyComponent } from './welcome/baby.component';
import { MatGridListModule, MatListModule, MatButtonModule, MatExpansionModule } from '@angular/material';
import { SharedComponentsModule } from '../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { ShowerComponent } from './shower/shower.component';
import { RegistryComponent } from './registry/registry.component';
import { BabyLandingComponent } from './baby-landing/baby-landing.component';
import { RouterModule } from '@angular/router';
import { BabyNavigationComponent } from './baby-navigation/baby-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule, MatListModule, MatButtonModule, MatExpansionModule,
    SharedComponentsModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [BabyComponent, ShowerComponent, RegistryComponent, BabyLandingComponent, BabyNavigationComponent],
  exports: [BabyComponent]
})
export class BabyModule { }
