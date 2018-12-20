import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule,
  MatTableModule, MatTabsModule } from '@angular/material';
import { ProjectsDashboardService } from './projects.service';
import { ProjectsComponent } from './projects.component';
import { NgxChartsModule } from '../../../../../node_modules/@swimlane/ngx-charts';
import { AlbumSharedModule } from '../../../../@album/shared.module';
import { AlbumSidebarModule, AlbumWidgetModule } from '../../../../@album/components';

const routes: Routes = [
    {
        path     : '**',
        component: ProjectsComponent,
        resolve  : {
            data: ProjectsDashboardService
        }
    }
];

@NgModule({
    declarations: [
        ProjectsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,

        NgxChartsModule,

        AlbumSharedModule,
        AlbumSidebarModule,
        AlbumWidgetModule
    ],
    providers   : [
        ProjectsDashboardService
    ]
})
export class ProjectsDashboardModule { }

