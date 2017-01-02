import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';

@Component({
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss'],
})
export class QuizListComponent implements OnInit {
  public quizzes$: Observable<Quiz[]>;

  constructor(
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
    this.quizzes$ = this.quizService.getAllQuizzes();
  }
}
