import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home').then(m => m.HomeComponent)
  },
  {
    path: 'tickets',   
    loadComponent: () =>
      import('./tickets/tickets').then(m => m.TicketsComponent)
  }
];
