import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: () => { return 'login'; },
    pathMatch: 'full'
  },
  {
    path: 'login',
    title: 'pageTitle.login',
    loadComponent: () =>
      import('@auth/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'logout',
    title: 'pageTitle.logout',
    loadComponent: () =>
      import('@auth/logout/logout.component').then((m) => m.LogoutComponent)
  }
];
