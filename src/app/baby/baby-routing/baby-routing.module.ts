import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';

import { BabyComponent } from '../welcome/baby.component';
import { RegistryComponent } from '../registry/registry.component';
import { ShowerComponent } from '../shower/shower.component';
import { BabyLandingComponent } from '../baby-landing/baby-landing.component';

const externalUrlRedirectResolver = new InjectionToken('externalUrlRedirectResolver');

const babyRoutes: Routes = [
  {
    path: 'baby/welcome', component: BabyLandingComponent, children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: BabyComponent },
      { path: 'shower', component: ShowerComponent },
      { path: 'registry', component: RegistryComponent }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(babyRoutes),
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
export class BabyRoutingModule { }
