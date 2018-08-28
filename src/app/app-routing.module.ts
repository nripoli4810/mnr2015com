import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';

import { GalleriesComponent } from './galleries/galleries.component';
import { BabyComponent } from './baby/baby.component';
import { NotFoundComponent } from './not-found.component';
import { LandingComponent } from './landing/landing.component';

const externalUrlRedirectResolver = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'galleries', component: GalleriesComponent },
  { path: 'baby', component: BabyComponent },
  {
    path: 'blog', resolve: { url: externalUrlRedirectResolver }, component: NotFoundComponent,
    data: { externalUrl: 'http://blog.mnr2015.com' }
  },
  {
    path: 'dev', resolve: { url: externalUrlRedirectResolver }, component: NotFoundComponent,
    data: { externalUrl: 'http://dev.mnr2015.com' }
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: externalUrlRedirectResolver,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = (route.data as any).externalUrl;
        window.open(externalUrl, '_blank');
      }
    }
  ]
})
export class AppRoutingModule { }
