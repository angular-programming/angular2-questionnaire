import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { QuestionnaireModel } from '../../shared/models/questionnaire.model';
import { SITE_HOST_URL } from '../../shared/index';

@Injectable()
export class QuestionnaireService {

	constructor(private http:Http) { }

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'server error');
	}

	//根据id获取问卷信息
	getQuestionnaireById(id: string) {
		return this.http.get(SITE_HOST_URL + 'questionnaire/' + id)
                    .map(res => <QuestionnaireModel>res.json().data)
                    .catch(this.handleError);
	}

	getQuestionnaires() {
		return this.http.get(SITE_HOST_URL + 'questionnaires')
						.map(res => <QuestionnaireModel[]>res.json().data)
						.catch(this.handleError);
	}

	//添加新问卷
	addQuestionnaire(questionnaire:QuestionnaireModel) {
		let body = JSON.stringify(questionnaire);
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers:headers});

		return this.http.post(SITE_HOST_URL + 'questionnaire/add', body, options)
					.map(res => <QuestionnaireModel>res.json().data)
					.catch(this.handleError);	
	}
    
	//删除已有问卷
	deleteQuestionnaire(id: string) {
		return this.http.get(SITE_HOST_URL + 'questionnaire/delete/' + id)
					.map(res => <Object>res.json().data)
					.catch(this.handleError);
	}

	//更新已有问卷
	updateQuestionnaire(questionnaire:QuestionnaireModel) {
		let body = JSON.stringify(questionnaire);
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers:headers});

		return this.http.post(SITE_HOST_URL + 'questionnaire/update', body, options)
		.map(res => <QuestionnaireModel>res.json().data)
		.catch(this.handleError);
	}

	//发布问卷
	publishQuestionnaire(id: string){
		return this.http.get(SITE_HOST_URL + 'questionnaire/publish/' + id)
					.map(res => <QuestionnaireModel>res.json().data)
					.catch(this.handleError);
	}

	//回收问卷
	reclaimQuestionnaire(questionnaire:QuestionnaireModel) { }

}