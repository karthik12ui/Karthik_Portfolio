import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProfessionalComponent } from './professional.component';
import { AlbumSharedModule } from '../../../../@album/shared.module';
import { AlbumWidgetModule } from '../../../../@album/components';
import { ProfessionalDashboardService } from './professional.service';


const routes: Routes = [
    {
        path     : '**',
        component: ProfessionalComponent,
        resolve  : {
            data: ProfessionalDashboardService
        }
    }
];

@NgModule({
    declarations: [
        ProfessionalComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTabsModule,
        ChartsModule,
        NgxChartsModule,

        AlbumSharedModule,
        AlbumWidgetModule
    ],
    providers   : [
        ProfessionalDashboardService
    ]
})
export class ProfessionalDashboardModule {
}

