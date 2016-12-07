import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [CommonModule, CoreModule, AdminRoutingModule],
  declarations: [AdminComponent],
  exports: [AdminComponent]
})
export class AdminModule { }
