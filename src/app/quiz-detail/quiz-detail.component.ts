import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';

import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';
import { Question } from '../question';

@Component({
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss'],
})
export class QuizDetailComponent implements OnInit {
  public quizId: number;
  public quiz$: Observable<Quiz>;
  public questions$: Observable<Question[]>;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['quizId'];
    if (isNaN(Number(this.quizId))) return this.redirectToQuizList();
    else this.quizId = Number(this.quizId);
    console.log('Selected quiz', this.quizId);

    this.quiz$ = this.quizService.getQuiz(this.quizId);
    this.quiz$.first().subscribe((quiz?: Quiz) => {
      if (!quiz) this.redirectToQuizList();
    });

    this.questions$ = this.quiz$.mergeMap((quiz: Quiz) => this.quizService.getQuestions(quiz.question_ids));
  }

  private redirectToQuizList(): void {
    console.error(`Invalid quiz ID "${this.quizId}", redirecting to quiz list`);
    this.router.navigate(['quizzes']);
  }
}
