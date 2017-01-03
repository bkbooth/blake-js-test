import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Progress } from './progress';
import { Score } from './score';

@Injectable()
export class ProgressService {
  private progressKey: string = 'quiz.progress';
  private progress: Progress;

  private _progress$: BehaviorSubject<Progress>;
  public get progress$() { return this._progress$ }

  constructor() {
    this.progress = JSON.parse(localStorage.getItem(this.progressKey));
    if (!this.progress) this.progress = new Progress();

    this._progress$ = new BehaviorSubject<Progress>(this.progress);
  }

  add(item: Score): void {
    this.progress.current_quiz_id = item.quiz_id;
    this.progress.scores.push(item);
    this._progress$.next(this.progress);
    localStorage.setItem(this.progressKey, JSON.stringify(this.progress));
  }

  reset(): void {
    this.progress = new Progress();
    this._progress$.next(this.progress);
    localStorage.removeItem(this.progressKey);
  }
}
