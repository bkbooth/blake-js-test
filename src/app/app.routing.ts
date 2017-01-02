import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizListComponent } from './quiz-list';

export const routes: Routes = [
  {
    path: 'quizzes',
    component: QuizListComponent,
  },

  // Not found redirect
  {
    path: '**',
    redirectTo: '/quizzes',
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
