import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BabyComponent } from './baby.component';
import { MatGridListModule, MatListModule } from '@angular/material';
import { SharedComponentsModule } from '../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule, MatListModule,
    SharedComponentsModule,
    FlexLayoutModule
  ],
  declarations: [BabyComponent],
  exports: [BabyComponent]
})
export class BabyModule { }
