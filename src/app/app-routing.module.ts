import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';

import { GalleriesComponent } from './galleries/galleries.component';
import { LandingComponent } from './landing/landing.component';
import { RedirectedComponent } from './redirected/redirected.component';
import { BabyLandingComponent } from './baby/baby-landing/baby-landing.component';

const externalUrlRedirectResolver = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'galleries', component: GalleriesComponent },
  { path: 'baby', component: BabyLandingComponent },
  {
    path: 'blog', resolve: { url: externalUrlRedirectResolver }, component: RedirectedComponent,
    data: { externalUrl: 'http://blog.mnr2015.com' }
  },
  {
    path: 'dev', resolve: { url: externalUrlRedirectResolver }, component: RedirectedComponent,
    data: { externalUrl: 'http://dev.mnr2015.com' }
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
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
