import { Routes } from '@angular/router';

import { BreadcrumbResolverFn } from '@services/breadcrumb.service';

export const adminRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        title: 'pageTitle.home',
        loadComponent: () => import('@pages/home/home.component').then(m => m.HomeComponent),
        data: {
          role: 'admin',
          breadcrumb: 'home'
        },
        resolve: {
          breadcrumbs: BreadcrumbResolverFn
        }
      },
    ]
  }
];
