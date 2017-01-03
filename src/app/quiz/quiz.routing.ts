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
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
