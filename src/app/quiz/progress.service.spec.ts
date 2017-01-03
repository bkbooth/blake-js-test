/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';

import { ProgressService } from './progress.service';
import { Progress } from './progress';
import { Score } from "./score";

describe('ProgressService', () => {
  let lsGetSpy, lsSetSpy, lsRemoveSpy;
  const score = new Score(0, 1);

  beforeAll(() => {
    lsGetSpy = spyOn(localStorage, 'getItem').and.returnValue(null);
    lsSetSpy = spyOn(localStorage, 'setItem');
    lsRemoveSpy = spyOn(localStorage, 'removeItem');
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgressService,
      ],
    });
  });

  it('should initialise empty progress', inject([ProgressService], (service: ProgressService) => {
    service.progress$.subscribe((progress: Progress) => {
      expect(progress.current_quiz_id).toBeUndefined();
      expect(progress.scores.length).toBe(0);
    });
  }));

  it('#add should update progress', inject([ProgressService], (service: ProgressService) => {
    service.add(score);

    expect(lsSetSpy.calls.any()).toBe(true, 'localStorage.setItem called');

    service.progress$.subscribe((progress: Progress) => {
      expect(progress.current_quiz_id).toBe(score.quiz_id);
      expect(progress.scores[0]).toBe(score);
    });
  }));

  it('#reset should reset progress', inject([ProgressService], (service: ProgressService) => {
    service.add(score);

    service.progress$.take(1).subscribe((progress: Progress) => {
      expect(progress.scores.length).toBe(1);
    });

    service.reset();

    expect(lsRemoveSpy.calls.any()).toBe(true, 'localStorage.removeItem called');

    service.progress$.take(1).subscribe((progress: Progress) => {
      expect(progress.scores.length).toBe(0);
    });
  }));
});
