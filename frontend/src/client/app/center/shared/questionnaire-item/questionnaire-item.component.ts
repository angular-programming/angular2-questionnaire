import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

import { QuestionnaireModel, QuestionnaireState } from '../../../shared/models/questionnaire.model';

@Component({
  moduleId: module.id,
  selector: 'questionnaire-item',
  templateUrl: 'questionnaire-item.component.html'
})
export class QuestionnaireItemComponent implements OnInit, OnChanges {

  @Input() questionnaire:QuestionnaireModel;

  private stateText:String;
  private stateClass:String;

  ngOnChanges(changes: SimpleChanges){
      let questionnaireChange = changes['questionnaire'];
      if(questionnaireChange.previousValue.state && 
            questionnaireChange.currentValue.state !== questionnaireChange.previousValue.state){
          this.questionnaire = changes['questionnaire'].currentValue;
          this.setState();
      }
  }

  ngOnInit() {
      this.setState();
  }

  setState(){
      switch(this.questionnaire.state){
          case QuestionnaireState.Created:
            this.stateText = '已创建';
            this.stateClass = 'label-warning';
            break;
        case QuestionnaireState.Published:
            this.stateText = '回收中';
            this.stateClass = 'label-info';
            break;
        case QuestionnaireState.Finished:
            this.stateText = '已结束';
            this.stateClass = 'label-success';
            break;
        default:
            break;
      }
  }
}
