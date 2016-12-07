import { Component, OnInit }  from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { FieldBase } from '../field/field-base';
import { RegisterService } from '../../../core/services/register.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  registered = false;
  fields: FieldBase<any>[] = [];
  alert:any = {msg: '注册成功', type: 'success', closable: true};

  constructor(private rs: RegisterService,
              private userService:UserService,
              private route:Router) {
    this.fields = rs.getFields();
  }

  ngOnInit() {
    this.form = this.rs.toFormGroup(this.fields);
  }

  showPassword () {
    this.fields.forEach((field : any) => {
      if (field.key === 'password') {
        field.type = field.type === 'password' ? 'text' : 'password';
      }
    });
  }

  resetForm () {
    this.form.reset();
  }

  register() {
    this.rs
      .addUser(this.form.value)
      .subscribe((res: any) => {
        let body = res.json();
        this.registered = true;
        new Observable((observer: Observer<any>) => {
          this.alert.msg = body.message || "注册成功"; // 操作提示信息
          this.alert.type =body.success ? "success" : "danger";
          this.registered = true;
          observer.next(true);
        }).delay(2000).subscribe(data=>{ // 操作提示，2秒后跳转到首页
          if(body.success) {
            this.userService.isLogin = true; // 设置当前用户已登录
            this.userService.userInfo = { username: this.form.value.username,createDate:new Date().toLocaleString()}  // 缓存用户信息，显示在导航栏上
            this.route.navigate(['']); // 跳到首页
          }
          this.registered = false;
        });
      }, (error: any) => {
        console.error(error);
      });
  }
}
