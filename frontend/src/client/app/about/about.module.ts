import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AccordionModule } from 'ng2-bootstrap/components/accordion';

@NgModule({
    imports: [CommonModule, AccordionModule],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})
export class AboutModule { }
