import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then((m) => m.Home),
    title: 'شرکت فنی مهندسی اشکان | صفحه اصلی',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services').then((m) => m.Services),
    title: 'خدمات | شرکت فنی مهندسی اشکان',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects').then((m) => m.Projects),
    title: 'پروژه‌ها | شرکت فنی مهندسی اشکان',
  },
  {
    path: 'about',
    loadComponent: () =>
       import('./features/about/about').then(m => m.About),
    title: 'درباره ما | شرکت فنی مهندسی اشکان',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact').then((m) => m.Contact),
    title: 'تماس با ما | شرکت فنی مهندسی اشکان',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
