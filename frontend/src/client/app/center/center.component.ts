import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { QuestionnaireService } from '../core/services/questionnaire.service';
import { QuestionnaireModel, QuestionnaireState } from '../shared/models/questionnaire.model';

@Component({
  moduleId: module.id,
  selector: 'sd-center',
  templateUrl: 'center.component.html',
  styleUrls: ['center.component.css']
})
export class CenterComponent implements OnInit {

  private questionnaires:QuestionnaireModel[] = [];
  private selectedQuestionnaire:QuestionnaireModel;
  private selectedIndex:number;
  private isEmpty:boolean;

  constructor(private cd:ChangeDetectorRef, private questionnaireService:QuestionnaireService) { }

  ngOnInit() {
    this.questionnaireService.getQuestionnaires()
      .subscribe(
        questionnaires => {
          // 后端返回空对象或者空的问卷数组
          if(!questionnaires || questionnaires.length === 0){
            this.isEmpty = true;
            return;
          }
          this.isEmpty = false;
          this.questionnaires = questionnaires;
          this.selectedQuestionnaire = this.questionnaires[0];
          this.selectedIndex = 0;
        },
        error => console.error(error)
      );
  }

  onSelect(questionnaire:QuestionnaireModel, index:number) {
    this.selectedQuestionnaire = questionnaire;
    this.selectedIndex = index;
  }

  onDeleteQuestionnaire() {
    this.questionnaireService.deleteQuestionnaire(this.selectedQuestionnaire.id)
          .subscribe(
              res => {
                this.questionnaires.splice(this.selectedIndex, 1);
                //全部删除
                if(this.questionnaires.length === 0){
                  this.isEmpty = true;
                } else {
                  this.selectedQuestionnaire = this.questionnaires[0];
                  this.selectedIndex = 0;
                }
              },
              error => console.log(error)

          );
  }

  onPublishQuestionnaire(){
    this.questionnaireService.publishQuestionnaire(this.selectedQuestionnaire.id)
          .subscribe(
            questionnaire => {
              this.selectedQuestionnaire.state = QuestionnaireState.Published;
              this.questionnaires[this.selectedIndex] = Object.assign({}, this.selectedQuestionnaire);
              this.cd.detectChanges();
            },
            error => console.log(error)
          );
  }
}
