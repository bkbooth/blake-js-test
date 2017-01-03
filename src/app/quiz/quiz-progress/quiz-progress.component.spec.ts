/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizProgressComponent } from './quiz-progress.component';
import { QuizService } from '../quiz.service';
import { ProgressService } from '../progress.service';
import {
  ProgressStubService,
  ProgressBarStubComponent,
  QuizStubService,
  RouterLinkStubDirective,
} from '../../../testing';

describe('QuizProgressComponent', () => {
  let component: QuizProgressComponent;
  let fixture: ComponentFixture<QuizProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuizProgressComponent,
        RouterLinkStubDirective,
        ProgressBarStubComponent,
      ],
      providers: [
        { provide: QuizService, useClass: QuizStubService },
        { provide: ProgressService, useClass: ProgressStubService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
