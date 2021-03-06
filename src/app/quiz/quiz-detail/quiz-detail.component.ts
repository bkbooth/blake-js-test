import { Component, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NumberCorrectPipe } from './number-correct.pipe';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';
import { Question } from '../question';
import { Score } from '../score';

@Component({
  selector: 'quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss'],
})
export class QuizDetailComponent implements OnChanges {
  @Input() quiz: Quiz;
  @Output() complete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(NgForm) quizForm;

  public questions: Question[];
  public answersSubmitted: boolean;

  constructor(
    private quizService: QuizService,
  ) { }

  ngOnChanges(): void {
    this.quizService.getQuestions(this.quiz.question_ids)
      .first()
      .subscribe((questions: Question[]) => this.questions = questions);

    this.quizForm.resetForm();
    this.answersSubmitted = false;
  }

  onQuizSubmit(): void {
    this.answersSubmitted = true;
  }

  onComplete(): void {
    const score = new NumberCorrectPipe().transform(this.questions);
    this.complete.emit(new Score(this.quiz.id, score));
  }
}
