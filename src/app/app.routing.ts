import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizzesComponent } from './quizzes';
import { QuizProgressComponent } from './quiz-progress';

export const routes: Routes = [
  {
    path: 'quizzes',
    component: QuizzesComponent,
  },

  {
    path: 'progress',
    component: QuizProgressComponent,
  },

  // Not found redirect
  {
    path: '**',
    redirectTo: '/quizzes',
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
