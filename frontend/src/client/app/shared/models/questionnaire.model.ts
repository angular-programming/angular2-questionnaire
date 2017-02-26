import { QuestionModel } from './question.model';

// //问卷数据模型定义
// export interface QuestionnaireModel{
//   id?:string; //问卷ID
//   title:string; //问卷标题
//   starter:string; //开始问候语
//   ending:string;  //结束问候语
//   state:QuestionnaireState; //问卷状态
//   questionList: QuestionModel[];  //问题列表
//   createDate?:string; //创建日期
// }

//问卷数据模型定义
export class QuestionnaireModel{
  id?:string; //问卷ID
  title:string; //问卷标题
  starter:string; //开始问候语
  ending:string;  //结束问候语
  state:QuestionnaireState; //问卷状态
  questionList: QuestionModel[];  //问题列表
  createDate?:string; //创建日期
}

//问卷状态枚举类型
export const enum QuestionnaireState{
  Created,   //已创建状态
  Published, //发布回收状态
  Finished   //完成状态
}
