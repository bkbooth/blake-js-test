import { Score } from './score';

export class Progress {
  public current_quiz_id: number;
  public scores: Score[];

  constructor() {
    this.scores = [];
  }
}
