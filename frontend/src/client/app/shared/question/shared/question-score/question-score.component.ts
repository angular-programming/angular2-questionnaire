import { Component, EventEmitter, Input, Output } from '@angular/core';

import { QuestionComponent } from '../../index';
import { QuestionModel } from '../../../models/question.model';

@Component({
  moduleId: module.id,
  selector: 'question-score',
  templateUrl: 'question-score.component.html'
})
export class QuestionScoreComponent extends QuestionComponent {

  @Input() question: QuestionModel;
  @Input() editable: boolean;
  @Output() deleteQuestionRequest: EventEmitter<any> = new EventEmitter();

}