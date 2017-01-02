import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Quiz } from './quiz';
import { Question } from './question';

@Injectable()
export class QuizService {
  constructor(
    private http: Http,
  ) { }

  getAllQuizzes(): Observable<Quiz[]> {
    return this.http.get('./assets/quizzes.json')
      .map((response: Response) => response.json())
      .map((response: { quizzes: Quiz[] }) => response.quizzes);
  }

  getQuiz(id: number): Observable<Quiz> {
    return this.getAllQuizzes()
      .map((quizzes: Quiz[]) => quizzes.find((quiz: Quiz) => quiz.id === id));
  }

  getQuestions(ids?: number[]): Observable<Question[]> {
    const allQuestions$ = this.http.get('./assets/questions.json')
      .map((response: Response) => response.json())
      .map((response: { questions: Question[] }) => response.questions);

    return ids ?
      allQuestions$.map((questions: Question[]) =>
        questions.filter((question: Question) => ids.includes(question.id))
      ) :
      allQuestions$;
  }
}
