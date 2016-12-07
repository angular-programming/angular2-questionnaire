import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { FieldComponent } from './field/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, SharedModule, AlertModule],
    declarations: [FieldComponent, LoginComponent, RegisterComponent],
    exports: [FieldComponent, LoginComponent, RegisterComponent, CommonModule]
})
export class UserSharedModule { }
