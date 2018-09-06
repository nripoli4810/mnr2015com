import { NgModule } from '@angular/core';
import { CountdownComponent } from './countdown/countdown.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [],
  declarations: [CountdownComponent, NotFoundComponent],
  exports: [CountdownComponent, NotFoundComponent]
})
export class SharedComponentsModule { }
