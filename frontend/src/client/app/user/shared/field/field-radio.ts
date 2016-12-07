import { FieldBase } from './field-base';

export class FieldRadio extends FieldBase<string> {

  controlType = 'radio';
  type: string;
  items: {name: string, value: string}[] = [];

  constructor(options: any) {
    super(options);
    this.items = options['items'] || [];
    this.type = 'radio';
  }
}