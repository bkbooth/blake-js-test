import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizzesComponent } from './quizzes';

export const routes: Routes = [
  {
    path: 'quizzes',
    component: QuizzesComponent,
  },

  // Not found redirect
  {
    path: '**',
    redirectTo: '/quizzes',
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
