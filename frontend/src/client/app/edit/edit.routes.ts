import { Route } from '@angular/router';

import { AuthGuard } from '../core/services/auth-guard.service';
import { EditComponent } from './index';

export const EditRoutes: Route[] = [
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthGuard]
  }
];
