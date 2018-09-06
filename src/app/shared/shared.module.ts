import { NgModule } from '@angular/core';
import { CountdownComponent } from './countdown/countdown.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CallbackPipe } from './callback.pipe';

@NgModule({
  imports: [],
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
