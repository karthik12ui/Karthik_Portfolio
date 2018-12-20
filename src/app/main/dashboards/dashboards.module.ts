import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlbumSharedModule } from '../../../@album/shared.module';
import { MyService } from '../../fake-db/shared-db.service';

const routes = [
    {
        path        : 'dashboards/professional',
        loadChildren: './professional/professional.module#ProfessionalDashboardModule'
    },
    {
        path        : 'dashboards/projects',
        loadChildren: './projects/projects.module#ProjectsDashboardModule'
    },
];

@NgModule({
    imports     : [
        RouterModule.forChild(routes),
        AlbumSharedModule
    ],
    providers: [
        MyService
    ],
})
export class DashboardModule {
}
