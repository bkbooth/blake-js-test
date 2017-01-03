/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';
import { Http, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { QuizService } from './quiz.service';
import { Quiz } from './quiz';
import { Question } from './question';
import { HttpStubService } from '../../testing';

describe('QuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuizService,
        { provide: Http, useClass: HttpStubService },
      ],
    });
  });

  it('#getAllQuizzes returns all quizzes', inject([QuizService], (service: QuizService) => {
    const quizzes = [{ id: 0, title: 'Test Quiz', question_ids: [] }];
    const response = new Response(new ResponseOptions({
      body: { quizzes },
    }));
    const httpGetSpy = spyOn(TestBed.get(Http), 'get').and.returnValue(Observable.of(response));

    service.getAllQuizzes().take(1).subscribe((qs: Quiz[]) => {
      expect(qs.length).toBe(quizzes.length);
    });

    expect(httpGetSpy.calls.any()).toBe(true, 'http.get called');
  }));

  it('#getQuestions returns all questions when no param provided', inject([QuizService], (service: QuizService) => {
    const questions = [{ id: 1, question: 'Question 1' }];
    const response = new Response(new ResponseOptions({
      body: { questions },
    }));
    const httpGetSpy = spyOn(TestBed.get(Http), 'get').and.returnValue(Observable.of(response));

    service.getQuestions().take(1).subscribe((qs: Question[]) => {
      expect(qs.length).toBe(questions.length);
    });

    expect(httpGetSpy.calls.any()).toBe(true, 'http.get called');
  }));

  it('#getQuestions returns filtered and sorted questions', inject([QuizService], (service: QuizService) => {
    const questions = [
      { id: 1, question: 'Question 1' },
      { id: 2, question: 'Question 2' },
      { id: 3, question: 'Question 3' },
    ];
    const response = new Response(new ResponseOptions({
      body: { questions },
    }));
    const httpGetSpy = spyOn(TestBed.get(Http), 'get').and.returnValue(Observable.of(response));

    let ids = [3, 1];
    service.getQuestions(ids).take(1).subscribe((qs: Question[]) => {
      expect(qs.length).toBe(ids.length, 'question 2 filtered out');
      expect(qs[0]).toBe(questions[2], 'question 3 first');
      expect(qs[1]).toBe(questions[0], 'question 1 second');
    });
  }));
});
