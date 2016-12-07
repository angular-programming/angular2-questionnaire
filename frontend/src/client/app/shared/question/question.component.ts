import { OnInit, EventEmitter } from '@angular/core';

import { QuestionModel } from '../models/question.model';

export class QuestionComponent implements OnInit {

  question: QuestionModel;
  backupQuestion: QuestionModel;
  editable: boolean = false;
  isEditing: boolean = false;
  deleteQuestionRequest: EventEmitter<any> = new EventEmitter();

  ngOnInit(){
    this.copyQuestion();
  }

  private copy(source: QuestionModel): QuestionModel {
    return <QuestionModel>JSON.parse(JSON.stringify(source));
  }

  public copyQuestion() {
    this.backupQuestion = this.copy(this.question);

  }

  onEdit() {
    this.isEditing = true;
  }

  onSave() {
    this.copyQuestion();
    this.isEditing = false;
  }

  onCancel() {
    this.question = this.copy(this.backupQuestion);
    this.isEditing = false;
  }

  onDelete() {
    this.deleteQuestionRequest.emit(this.question);
  }
}
