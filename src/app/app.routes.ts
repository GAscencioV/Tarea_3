import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'sum',
    loadComponent: () => import('./pages/sum/sum.page').then( m => m.SumPage)
  },
  {
    path: 'multiplier',
    loadComponent: () => import('./pages/multiplier/multiplier.page').then( m => m.MultiplierPage)
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience.page').then( m => m.ExperiencePage)
  },
  {
    path: 'translator',
    loadComponent: () => import('./pages/translator/translator.page').then( m => m.TranslatorPage)
  },
];
