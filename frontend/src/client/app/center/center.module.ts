import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CenterComponent } from './center.component';
import { CenterSharedModule } from './shared/center-shared.module';
import { UserModule } from '../user/user.module';

@NgModule({
    imports: [CommonModule, RouterModule, CenterSharedModule, UserModule],
    declarations: [CenterComponent],
    exports: [CenterComponent, CenterSharedModule]
})
export class CenterModule { }
