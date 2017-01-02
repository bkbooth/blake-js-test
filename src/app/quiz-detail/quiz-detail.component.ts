import { Component, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';
import { Question } from '../question';

@Component({
  selector: 'quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss'],
})
export class QuizDetailComponent implements OnChanges {
  @Input() quiz: Quiz;
  @Output() complete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(NgForm) quizForm;

  public questions$: Observable<Question[]>;
  public answersSubmitted: boolean;

  constructor(
    private quizService: QuizService,
  ) { }

  ngOnChanges(): void {
    this.quizForm.resetForm();
    this.questions$ = this.quizService.getQuestions(this.quiz.question_ids);
    this.answersSubmitted = false;
  }

  onQuizSubmit(): void {
    this.answersSubmitted = true;
  }

  onComplete(): void {
    this.complete.emit();
  }
}