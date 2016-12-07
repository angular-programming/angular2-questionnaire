import { Route } from '@angular/router';

import { CenterComponent } from './index';
import { AuthGuard } from '../core/services/auth-guard.service';

export const CenterRoutes: Route[] = [
  {
    path: 'center',
    component: CenterComponent,
    canActivate: [AuthGuard]
  }
];
