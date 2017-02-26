// 问题模型数据定义

// export interface QuestionModel{
//   title:string; //问题标题（描述）
//   type:QuestionType;  //问题类型
//   options?:any[]; //答案选项
//   answer:any; //问题答案
// }

export class QuestionModel {
  title:string; //问题标题（描述）
  type:QuestionType;  //问题类型
  options?:any[]; //答案选项
  answer:any; //问题答案
}

// 问题类型
export const enum QuestionType{
  Text,
  SingleSelect,
  MultiSelect,
  Score
}
