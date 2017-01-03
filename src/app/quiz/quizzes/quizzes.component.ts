import { Component, OnInit } from '@angular/core';

import { QuizService } from '../quiz.service';
import { ProgressService } from '../progress.service';
import { Quiz } from '../quiz';
import { Progress } from '../progress';
import { Score } from '../score';

@Component({
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
})
export class QuizzesComponent implements OnInit {
  public quizzes: Quiz[];

  public started: boolean = false;
  public finished: boolean = false;
  public currentQuizIndex?: number;
  public currentQuiz?: Quiz;

  constructor(
    private quizService: QuizService,
    private progressService: ProgressService,
  ) { }

  ngOnInit(): void {
    this.quizService.getAllQuizzes()
      .first()
      .subscribe((quizzes: Quiz[]) => this.quizzes = quizzes);

    // Check for existing progress and set state accordingly
    this.progressService.progress$
      .combineLatest(this.quizService.getAllQuizzes())
      .first()
      .subscribe(([progress, quizzes]: [Progress, Quiz[]]) => {
        if (progress.current_quiz_id === undefined) return;

        const currentQuizIndex = quizzes.findIndex((quiz: Quiz) => quiz.id === progress.current_quiz_id);
        if (currentQuizIndex < 0) return this.progressService.reset();

        this.started = true;
        console.log('Continuing from existing progress. Last completed index:', currentQuizIndex);

        const nextQuizIndex = currentQuizIndex + 1;
        if (nextQuizIndex < this.quizzes.length) this.goToQuiz(nextQuizIndex);
        else this.finished = true;
      });
  }

  goToNextQuiz(score?: Score): void {
    if (!this.started) {
      this.started = true;
      return this.goToQuiz(0);
    }

    this.progressService.add(score);

    const nextQuizIndex = this.currentQuizIndex + 1;
    if (nextQuizIndex < this.quizzes.length) this.goToQuiz(nextQuizIndex);
    else this.finished = true;
  }

  private goToQuiz(index: number): void {
    this.currentQuizIndex = index;
    this.currentQuiz = this.quizzes[index];
  }

  reset(): void {
    this.started = false;
    this.finished = false;
    this.currentQuizIndex = undefined;
    this.currentQuiz = undefined;

    this.progressService.reset();
  }
}
