import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuestionnaireModel } from '../shared/models/questionnaire.model';
import { QuestionnaireService } from '../core/services/questionnaire.service';

@Component({
  moduleId: module.id,
  selector: 'sd-published',
  templateUrl: 'published.component.html',
  styleUrls: ['published.component.css']
})
export class PublishedComponent implements OnInit {

  private questionnaire: QuestionnaireModel;
  private id: string;

  constructor(private questionnaireService:QuestionnaireService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id && this.id !== '0') {
      this.questionnaireService.getQuestionnaireById(this.id)
        .subscribe(
          questionnaire => this.questionnaire = questionnaire,
          error => console.log(error)
        );
    }
  }
}
