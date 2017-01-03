import { Observable } from 'rxjs';

export class HttpStubService { }

export class QuizStubService {
  getAllQuizzes() {
    return Observable.of([]);
  }
}

export class ProgressStubService {
  progress$ = Observable.of({});
}
