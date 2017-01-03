import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { routing } from './quiz.routing';

import { QuizzesComponent } from './quizzes';
import { QuizDetailComponent, NumberCorrectPipe } from './quiz-detail';
import { QuizProgressComponent } from './quiz-progress';

import { QuizService } from './quiz.service';
import { ProgressService } from './progress.service';

@NgModule({
  imports: [
    SharedModule,
    routing,
  ],
  declarations: [
    QuizzesComponent,
    QuizDetailComponent,
    QuizProgressComponent,
    NumberCorrectPipe,
  ],
  providers: [
    QuizService,
    ProgressService,
  ],
})
export class QuizModule { }
