import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';

import { MatCardModule, MatToolbarModule, MatGridListModule,
  MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from '@angular/material';

import { NavigationComponent } from './navigation/navigation.component';
import { CallbackPipe } from './callback.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { BabyModule } from './baby/baby.module';
import { GalleriesModule } from './galleries/galleries.module';
import { NotFoundComponent } from './not-found.component';
import { LandingComponent } from './landing/landing.component';
import { RedirectedComponent } from './redirected/redirected.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    NavigationComponent,
    CallbackPipe,
    NotFoundComponent,
    LandingComponent,
    RedirectedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    GalleriesModule,
    BabyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
