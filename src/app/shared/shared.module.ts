import { NgModule } from '@angular/core';
import { CountdownComponent } from './countdown/countdown.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CallbackPipe } from './callback.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  declarations: [
    CountdownComponent,
    NotFoundComponent,
    CallbackPipe,
  ],
  exports: [
    CountdownComponent,
    NotFoundComponent,
    CallbackPipe,
  ]
})
export class SharedComponentsModule { }
