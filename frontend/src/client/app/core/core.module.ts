import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service';
import { LoginService } from './services/login.service';
import { NavbarComponent } from './navbar/index';
import { QuestionnaireService } from './services/questionnaire.service';
import { RegisterService } from './services/register.service';
import { UserService } from './services/user.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [NavbarComponent],
    providers: [QuestionnaireService, UserService, LoginService, RegisterService, AuthGuard],
    exports: [NavbarComponent]
})
export class CoreModule {

    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}

