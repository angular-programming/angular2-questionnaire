import { Component, Input } from '@angular/core';

import { QuestionnaireModel } from '../../../shared/models/questionnaire.model';

@Component({
  moduleId: module.id,
  selector: 'questionnaire-outline',
  styleUrls: ['questionnaire-outline.component.css'],
  templateUrl: 'questionnaire-outline.component.html'
})
export class QuestionnaireOutlineComponent {

  @Input() questionnaire: QuestionnaireModel;

}