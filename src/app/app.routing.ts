import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  // Not found redirect
  {
    path: '**',
    redirectTo: '/quizzes',
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
