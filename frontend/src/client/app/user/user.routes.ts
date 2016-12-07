import { Route } from '@angular/router';

import { LoginComponent } from './shared/login/index';
import { RegisterComponent } from './shared/register/index';

export const UserRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
