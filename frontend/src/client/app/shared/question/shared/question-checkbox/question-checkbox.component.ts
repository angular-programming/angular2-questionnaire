import { Component, EventEmitter, Input, Output } from '@angular/core';

import { QuestionComponent } from '../../index';
import { QuestionModel } from '../../../models/question.model';

@Component({
  moduleId: module.id,
  selector: 'question-checkbox',
  templateUrl: 'question-checkbox.component.html'
})
export class QuestionCheckboxComponent extends QuestionComponent {

	@Input() question: QuestionModel;
	@Input() editable: boolean;
	@Output() deleteQuestionRequest: EventEmitter<any> = new EventEmitter();

	private key: number;

	ngOnInit() {
    this.copyQuestion();
		let options = this.question.options;
		this.key = options[options.length-1].key;
		if(!this.question.answer.selected){
			this.question.answer.selected = [];
		}
	}

  onDeleteOption(index: number) {
    if(this.question.options.length <= 1) {
      return;
    }

    this.question.options.splice(index, 1);
  }

  onAddOption() {
    this.question.options.push({key: ++this.key, value:'' });
  }

  setSelectedValue(checked: boolean, value: string) {
      let selected = this.question.answer.selected;
      let index:number = selected.indexOf(value);
      if(checked){
          if(index < 0){
              selected.push(value);
          }
      }else{
          if(index > -1){
              selected.splice(index, 1);
          }
      }
  }
}
