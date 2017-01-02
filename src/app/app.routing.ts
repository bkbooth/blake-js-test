import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizListComponent } from './quiz-list';
import { QuizDetailComponent } from './quiz-detail';

export const routes: Routes = [
  {
    path: 'quizzes',
    children: [
      { path: '', component: QuizListComponent },
      { path: ':quizId', component: QuizDetailComponent },
    ],
  },

  // Not found redirect
  {
    path: '**',
    redirectTo: '/quizzes',
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
