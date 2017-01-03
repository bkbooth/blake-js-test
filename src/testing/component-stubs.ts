import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'quiz-detail',
  template: '',
})
export class QuizDetailStubComponent {
  @Input() quiz: any;
  @Output() complete: EventEmitter<any>;
}

@Component({
  selector: 'progress-bar',
  template: '',
})
export class ProgressBarStubComponent {
  @Input() value: number;
  @Input() max: number;
}
