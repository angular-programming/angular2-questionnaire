import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishedComponent } from './published.component';
import { PublishedRoutingModule } from './published-routing.module';
import { QuestionnaireModule } from '../shared/questionnaire/questionnaire.module';

@NgModule({
  imports: [CommonModule, PublishedRoutingModule, QuestionnaireModule],
  declarations: [PublishedComponent],
  exports: [PublishedComponent]
})
export class PublishedModule { }
