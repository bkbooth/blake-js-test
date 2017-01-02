import { Component, OnInit } from '@angular/core';

import { QuizService } from '../quiz.service';
import { ProgressService } from '../progress.service';
import { Quiz } from '../quiz';
import { Progress } from '../progress';

@Component({
  templateUrl: './quiz-progress.component.html',
  styleUrls: ['./quiz-progress.component.scss'],
})
export class QuizProgressComponent implements OnInit {
  public quizzes: Quiz[];
  public progress: Progress;

  constructor(
    private quizService: QuizService,
    private progressService: ProgressService,
  ) { }

  ngOnInit(): void {
    // Combine observables to make sure we have both quizzes and progress data
    this.progressService.progress$
      .combineLatest(this.quizService.getAllQuizzes())
      .distinctUntilChanged()
      .subscribe(([progress, quizzes]: [Progress, Quiz[]]) => {
        this.progress = progress;
        this.quizzes = quizzes;
      });
  }

  getQuizById(id: number): Quiz {
    return this.quizzes.find((quiz: Quiz) => quiz.id === id);
  }
}
