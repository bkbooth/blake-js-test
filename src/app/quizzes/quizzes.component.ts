import { Component, OnInit } from '@angular/core';

import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';

@Component({
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
})
export class QuizzesComponent implements OnInit {
  public quizzes: Quiz[];

  public started: boolean;
  public finished: boolean;
  public currentQuizId?: number;
  public currentQuiz?: Quiz;

  constructor(
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
    this.quizService.getAllQuizzes()
      .first()
      .subscribe((quizzes: Quiz[]) => this.quizzes = quizzes);

    this.reset();
  }

  goToNextQuiz(): void {
    if (!this.started) {
      this.started = true;
      return this.goToQuiz(0);
    }

    const nextQuizId = this.currentQuizId + 1;
    if (nextQuizId < this.quizzes.length) this.goToQuiz(nextQuizId);
    else this.finished = true;
  }

  private goToQuiz(id: number): void {
    this.currentQuizId = id;
    this.currentQuiz = this.quizzes[id];
  }

  reset(): void {
    this.started = false;
    this.finished = false;
    this.currentQuizId = undefined;
    this.currentQuiz = undefined;
  }
}
