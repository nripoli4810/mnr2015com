import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BabyComponent } from './baby.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BabyComponent],
  exports: [BabyComponent]
})
export class BabyModule { }
