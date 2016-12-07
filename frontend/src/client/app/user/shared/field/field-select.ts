import { FieldBase } from './field-base';

export class SelectField extends FieldBase<string> {

  controlType = 'select';
  options: {key: string, value: string}[] = [];

  constructor(options: any) {
    super(options);
    this.options = options['options'] || [];
  }
}