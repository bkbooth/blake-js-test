/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuizService } from './quiz.service';

describe('QuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizService]
    });
  });

  it('should create', inject([QuizService], (service: QuizService) => {
    expect(service).toBeTruthy();
  }));

  // TODO: add real tests
  // I started with the best intentions of full test coverage,
  // but my lack of angular testing experience is making it too time-consuming
});
