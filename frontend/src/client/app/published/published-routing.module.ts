import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublishedComponent } from './index';

const routes: Routes = [
    {
        path: 'published/:id',
        component: PublishedComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublishedRoutingModule { }
