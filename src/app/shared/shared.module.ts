import { NgModule } from '@angular/core';
import { CountdownComponent } from './countdown/countdown.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CallbackPipe } from './callback.pipe';
import { CommonModule } from '@angular/common';
import { BookFilterPipe } from './filter.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CountdownComponent,
    NotFoundComponent,
    CallbackPipe,
    BookFilterPipe,
  ],
  exports: [
    CountdownComponent,
    NotFoundComponent,
    CallbackPipe,
    BookFilterPipe,
  ]
})
export class SharedComponentsModule { }
