import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Response } from '@angular/http';

import { FieldBase } from '../field/field-base';
import { LoginService } from '../../../core/services/login.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  fields: FieldBase<any>[] = [];
  returnUrl: string ='';

  constructor(private rs: LoginService,
              private activeRoute: ActivatedRoute,
              private route:Router,
              private userService:UserService) {
    this.fields = rs.getFields();
    this.activeRoute.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'];
    });
  }

  ngOnInit() {
    this.form = this.rs.toFormGroup(this.fields);
  }

  login() {
    this.rs
      .login(this.form.value)
      .subscribe((res: Response) => {
        let body = res.json();
        if (body && body.success) {
          this.userService.isLogin = true;
          this.userService.userInfo = { username: this.form.value.username,createDate:new Date().toLocaleString()}
          this.route.navigateByUrl(this.returnUrl?this.returnUrl:'/');
        }
      }, error => {
        console.error(error);
      });
  }
}
