import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'quiz-detail',
  template: '',
})
export class QuizDetailStubComponent {
  @Input() quiz: any;
  @Output() complete: EventEmitter<any>;
}
