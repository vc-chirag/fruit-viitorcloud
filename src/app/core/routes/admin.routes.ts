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
      {
        path: 'order',
        title: 'pageTitle.order',
        loadComponent: () => import('@pages/order/order.component').then(m => m.OrderComponent),
        data: {
          role: 'admin',
          breadcrumb: 'order'
        },
        resolve: {
          breadcrumbs: BreadcrumbResolverFn
        }
      },
      {
        path: 'registry',
        title: 'pageTitle.registry',
        loadComponent: () => import('@pages/registry/registry.component').then(m => m.RegistryComponent),
        data: {
          role: 'admin',
          breadcrumb: 'registry'
        },
        resolve: {
          breadcrumbs: BreadcrumbResolverFn
        }
      },
      {
        path: 'ddt',
        title: 'pageTitle.ddt',
        loadComponent: () => import('@pages/ddt/ddt.component').then(m => m.DdtComponent),
        data: {
          role: 'admin',
          breadcrumb: 'ddt'
        },
        resolve: {
          breadcrumbs: BreadcrumbResolverFn
        }
      },
      {
        path: 'invoice',
        title: 'pageTitle.invoice',
        loadComponent: () => import('@pages/invoice/invoice.component').then(m => m.InvoiceComponent),
        data: {
          role: 'admin',
          breadcrumb: 'invoice'
        },
        resolve: {
          breadcrumbs: BreadcrumbResolverFn
        }
      },
      {
        path: 'query',
        title: 'pageTitle.query',
        loadComponent: () => import('@pages/query-table/query-table.component').then(m => m.QueryTableComponent),
        data: {
          role: 'admin',
          breadcrumb: 'query'
        },
        resolve: {
          breadcrumbs: BreadcrumbResolverFn
        }
      }
    ]
  }
];
