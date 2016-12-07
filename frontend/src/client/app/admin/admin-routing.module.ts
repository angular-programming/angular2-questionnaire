import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './index';
import { AboutRoutes } from '../about/index';
import { CenterRoutes } from '../center/index';
import { EditRoutes } from '../edit/index';
import { UserRoutes } from '../user/index';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            ...AboutRoutes,
            ...EditRoutes,
            ...UserRoutes,
            ...CenterRoutes
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

