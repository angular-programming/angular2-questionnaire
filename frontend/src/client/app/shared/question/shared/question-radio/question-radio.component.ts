import { Component, EventEmitter, Input, Output } from '@angular/core';

import { QuestionComponent } from '../../index';
import { QuestionModel } from '../../../models/question.model';

@Component({
  moduleId: module.id,
  selector: 'question-radio',
  templateUrl: 'question-radio.component.html'
})
export class QuestionRadioComponent extends QuestionComponent {

  @Input() question: QuestionModel;
  @Input() editable: boolean;
  @Output() deleteQuestionRequest: EventEmitter<any> = new EventEmitter();

  private key: number;

  ngOnInit() {
    this.copyQuestion();
    let options = this.question.options;
    this.key = options[options.length-1].key;
  }

  onDeleteOption(index:number) {
    if(this.question.options.length <= 1) {
      return;
    }

    this.question.options.splice(index, 1);
  }

  onAddOption() {
    this.question.options.push({key: ++this.key, value:'' });
  }
}
