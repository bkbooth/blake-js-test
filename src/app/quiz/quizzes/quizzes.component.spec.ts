/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesComponent } from './quizzes.component';
import { QuizService } from '../quiz.service';
import { ProgressService } from '../progress.service';
import {
  ProgressStubService,
  ProgressBarStubComponent,
  QuizDetailStubComponent,
  QuizStubService,
  RouterLinkStubDirective,
} from '../../../testing';

describe('QuizzesComponent', () => {
  let component: QuizzesComponent;
  let fixture: ComponentFixture<QuizzesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuizzesComponent,
        QuizDetailStubComponent,
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
    fixture = TestBed.createComponent(QuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
