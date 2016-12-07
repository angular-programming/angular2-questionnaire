import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { QuestionnaireModel, QuestionnaireState } from '../models/questionnaire.model';

@Component({
  moduleId: module.id,
  selector: 'questionnaire',
  styleUrls:['questionnaire.component.css'],
  templateUrl: 'questionnaire.component.html'
})
export class QuestionnaireComponent implements OnInit {

  @Input() questionnaire: QuestionnaireModel;
  @Output() submitQuestionnaire = new EventEmitter();

  private editable:boolean;

  ngOnInit() {
    this.editable = this.questionnaire && this.questionnaire.state === QuestionnaireState.Created;
  }

  onDeleteQuestion(index: number) {
    this.questionnaire.questionList.splice(index, 1);
  }

  onSubmit() {
      this.submitQuestionnaire.emit(this.questionnaire);
  }
}