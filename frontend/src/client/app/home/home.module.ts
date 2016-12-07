import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ng2-bootstrap/components/carousel';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, CoreModule, SharedModule, CarouselModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
