import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionnaireModel } from '../../../shared/models/questionnaire.model';

@Component({
  moduleId: module.id,
  selector: 'questionnaire-controls',
  templateUrl: 'questionnaire-controls.component.html',
  styleUrls: ['questionnaire-controls.component.css']
})
export class QuestionnaireControlsComponent {

  @Input() questionnaire:QuestionnaireModel;
  @Output() deleteQuestionnaire: EventEmitter<any> = new EventEmitter();
  @Output() publishQuestionnaire: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  onEdit(){
    this.router.navigateByUrl('admin/edit/' + this.questionnaire.id);
  }

  onPreview(){
    this.router.navigateByUrl('published/' + this.questionnaire.id);
  }

  onDelete(){
    this.deleteQuestionnaire.emit();
  }

  onPublish(){
    this.publishQuestionnaire.emit();
  }
}