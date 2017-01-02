/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProgressService } from './progress.service';

describe('ProgressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressService]
    });
  });

  it('should create', inject([ProgressService], (service: ProgressService) => {
    expect(service).toBeTruthy();
  }));
});
