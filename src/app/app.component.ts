import { Component, OnInit } from '@angular/core';

import { QuizService } from './quiz.service';
import { Quiz } from './quiz';
import { Question } from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public quizzes: Quiz[];
  public selectedQuiz: Quiz;

  public questions: Question[];

  constructor(
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
    this.quizService.getAllQuizzes()
      .subscribe((quizzes: Quiz[]) => this.quizzes = quizzes);
  }

  selectQuiz(): void {
    this.quizService.getQuestions(this.selectedQuiz.question_ids)
      .subscribe((questions: Question[]) => this.questions = questions);
  }
}
