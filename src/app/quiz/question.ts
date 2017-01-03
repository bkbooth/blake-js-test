export class Question {
  id: number;
  question: string;
  answers: string[];
  correct_answer: number;
  selected_answer?: number;
}
