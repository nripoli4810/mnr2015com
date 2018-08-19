import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriesComponent } from './galleries.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GalleriesComponent],
  exports: [ GalleriesComponent ]
})
export class GalleriesModule { }
