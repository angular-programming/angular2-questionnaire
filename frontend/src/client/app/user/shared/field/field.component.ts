import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from './field-base';

@Component({
    moduleId: module.id,
    selector: 'field',
  templateUrl: 'field.component.html',
  styleUrls: ['field.component.css']
})
export class FieldComponent {

  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

  get isEmpty() {
    let errors = this.form.controls[this.field.key].errors || {};
    return errors['empty'];
  }
}