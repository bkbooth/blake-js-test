/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';

import { QuizService } from './quiz.service';
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

  it('should create', inject([QuizService], (service: QuizService) => {
    expect(service).toBeTruthy();
  }));
});
