import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatDividerModule, MatIconModule, MatTabsModule } from '@angular/material';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';
import { ProfileAboutComponent } from './tabs/about/about.component';
import { AlbumSharedModule } from '../../../@album/shared.module';


const routes = [
    {
        path     : 'profile',
        component: ProfileComponent,
        resolve  : {
            profile: ProfileService
        }
    }
];

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileAboutComponent,
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatTabsModule,

        AlbumSharedModule
    ],
    providers   : [
        ProfileService
    ]
})
export class ProfileModule {
}
