/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { QuizDetailComponent } from './quiz-detail.component';
import { NumberCorrectPipe } from './number-correct.pipe';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';
import { QuizStubService } from '../../../testing';

describe('QuizDetailComponent', () => {
  let component: QuizDetailComponent;
  let fixture: ComponentFixture<QuizDetailComponent>;

  let testQuiz = new Quiz();
  testQuiz.title = 'Test Quiz';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuizDetailComponent,
        NumberCorrectPipe,
      ],
      imports: [
        FormsModule,
      ],
      providers: [
        { provide: QuizService, useClass: QuizStubService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDetailComponent);
    component = fixture.componentInstance;
    component.quiz = testQuiz;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
