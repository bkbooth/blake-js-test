import { Pipe, PipeTransform } from '@angular/core';

import { Question } from '../question';

@Pipe({
  name: 'numberCorrect',
})
export class NumberCorrectPipe implements PipeTransform {
  transform(questions?: Question[]): number|null {
    if (!questions) return null;

    return questions
      .filter((question: Question) => question.selected_answer === question.correct_answer)
      .length;
  }
}
