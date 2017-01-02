import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { QuizzesComponent } from './quizzes';
import { QuizDetailComponent } from './quiz-detail';
import { QuizService } from './quiz.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  declarations: [
    AppComponent,
    QuizzesComponent,
    QuizDetailComponent,
  ],
  providers: [
    QuizService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
