import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionSelectComponent } from './question-select/index';
import { QuestionnaireOutlineComponent } from './questionnaire-outline/index';

@NgModule({
  imports: [CommonModule],
  declarations: [QuestionSelectComponent, QuestionnaireOutlineComponent],
  exports: [QuestionSelectComponent, QuestionnaireOutlineComponent, CommonModule]
})
export class EditSharedModule { }
