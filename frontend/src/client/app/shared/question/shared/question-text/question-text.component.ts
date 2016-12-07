import { Component, EventEmitter, Input, Output } from '@angular/core';

import { QuestionComponent } from '../../index';
import { QuestionModel } from '../../../models/question.model';

@Component({
  moduleId: module.id,
  selector: 'question-text',
  templateUrl: 'question-text.component.html'
})
export class QuestionTextComponent extends QuestionComponent {

  @Input() question: QuestionModel;
  @Input() editable: boolean;
  @Output() deleteQuestionRequest: EventEmitter<any> = new EventEmitter();

}