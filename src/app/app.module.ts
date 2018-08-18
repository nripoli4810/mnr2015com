import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';

import { MatCardModule, MatToolbarModule, MatGridListModule, MatSidenavModule, MatListModule, MatIcon, MatIconModule } from '@angular/material';

import { NavigationComponent } from './navigation/navigation.component';
import { CallbackPipe } from './callback.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    NavigationComponent,
    CallbackPipe
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
