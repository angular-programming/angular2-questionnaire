import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionType } from '../shared/models/question.model';
import { QuestionnaireService } from '../core/services/questionnaire.service';
import { QuestionnaireModel, QuestionnaireState } from '../shared/models/questionnaire.model';

@Component({
  moduleId: module.id,
  selector: 'sd-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['edit.component.css']
})
export class EditComponent implements OnInit {

  private questionnaire: QuestionnaireModel;
  private id: string;

  constructor(private questionnaireService:QuestionnaireService, private activatedRoute:ActivatedRoute,
    private router: Router) {

    //初始化一个空的问卷对象
    this.questionnaire = {
      title: '',
      starter: '',
      ending: '',
      state: QuestionnaireState.Created,
      questionList: []
    };
  }

  ngOnInit() {
    //初始化问卷数据
    this.id = this.activatedRoute.snapshot.params['id'];

    if(this.id && this.id !== '0'){
      //id存在，代表当前页面为编辑已有问卷页面，调用服务获取问卷对象信息
      this.questionnaireService.getQuestionnaireById(this.id)
        .subscribe(
          questionnaire => this.questionnaire = questionnaire,
          error => console.log(error)
        );
    }
  }

  onAddQuestion(type: QuestionType) {
    //添加问题到问卷的问题列表
    switch(type){
      case QuestionType.Text:
      case QuestionType.Score:
        this.questionnaire.questionList.push({
          title: '问题标题',
          type: type,
          answer: ''
        });
        break;
      case QuestionType.SingleSelect:
        this.questionnaire.questionList.push({
          title: '问题标题',
          type: type,
          options: [{'key': 0, 'value': '选项1'}],
          answer:''
        });
        break;
      case QuestionType.MultiSelect:
        this.questionnaire.questionList.push({
          title: '问题标题',
          type: type,
          options: [{'key': 0, 'value': '选项1'}],
          answer:{}
        });
        break;
    }
  }

  onSubmitQuestionniare(questionnaire: QuestionnaireModel) {
    //保存问卷或回收答案
    if (questionnaire.state === QuestionnaireState.Created) {
      if (this.id && this.id !== '0') {
         //编辑已有问卷
         this.questionnaireService.updateQuestionnaire(questionnaire)
         .subscribe(
           questionnaire => this.gotoCenter(),
           error => console.log(error));
      } else {
        //创建新问卷
        this.questionnaireService.addQuestionnaire(questionnaire)
        .subscribe(
            questionnaire => this.gotoCenter(),
            error=> console.error(error));
      }
    }
  }

  gotoCenter() {
    this.router.navigateByUrl('admin/center');
  }
}
