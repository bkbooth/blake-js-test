/* tslint:disable:no-unused-variable */

import { NumberCorrectPipe } from './number-correct.pipe';

describe('NumberCorrectPipe', () => {
  let pipe: NumberCorrectPipe = new NumberCorrectPipe();

  it('returns null if questions not provided', () => {
    const result = pipe.transform();
    expect(result).toBeNull();
  });

  it('returns 0 if questions is empty', () => {
    const result = pipe.transform([]);
    expect(result).toBe(0);
  });

  it('returns the number of correct answered questions', () => {
    let questions = [];
    questions.push({ correct_answer: 0 });
    questions.push({ correct_answer: 1 });

    let result = pipe.transform(questions);
    expect(result).toBe(0);

    questions[0].selected_answer = questions[0].correct_answer;
    result = pipe.transform(questions);
    expect(result).toBe(1);

    questions[1].selected_answer = questions[1].correct_answer;
    result = pipe.transform(questions);
    expect(result).toBe(2);
  });
});
