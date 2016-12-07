import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireControlsComponent } from './questionnaire-controls/index';
import { QuestionnaireDetailComponent } from './questionnaire-detail/index';
import { QuestionnaireItemComponent } from './questionnaire-item/index';

@NgModule({
  imports: [CommonModule],
  declarations: [QuestionnaireItemComponent, QuestionnaireDetailComponent, QuestionnaireControlsComponent],
  exports: [QuestionnaireItemComponent, QuestionnaireDetailComponent, QuestionnaireControlsComponent]
})
export class CenterSharedModule { }
