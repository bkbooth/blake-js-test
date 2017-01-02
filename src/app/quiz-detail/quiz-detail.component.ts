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
  public answersSubmitted: boolean = false;

  public quiz$: Observable<Quiz>;
  public questions$: Observable<Question[]>;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.quizId = Number(this.route.snapshot.params['quizId']);
    if (isNaN(this.quizId)) return this.redirectToQuizList();
    console.log('Selected quiz', this.quizId);

    this.quiz$ = this.quizService.getQuiz(this.quizId);
    this.quiz$.first().subscribe(null, () => this.redirectToQuizList());

    this.questions$ = this.quiz$.mergeMap((quiz: Quiz) => this.quizService.getQuestions(quiz.question_ids));
  }

  private redirectToQuizList(): void {
    console.error(`Invalid quiz ID "${this.route.snapshot.params['quizId']}", redirecting to quiz list`);
    this.router.navigate(['quizzes']);
  }

  onQuizSubmit(): void {
    this.answersSubmitted = true;
  }
}
