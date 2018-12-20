import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';


import { AlbumModule } from '../@album/album.module';
import { AlbumProgressBarModule, AlbumSidebarModule, AlbumThemeOptionsModule } from '../@album/components';
import { AlbumSharedModule } from '../@album/shared.module';
import { AppComponent } from './app.component';
import { FakeDbService } from './fake-db/fake-db.service';

import { LayoutModule } from './layout/layout.module';
import { albumConfig } from './album-config';
import { DashboardModule } from './main/dashboards/dashboards.module';


const appRoutes: Routes = [
    {
        path        : 'main',
        loadChildren: './main/profile/profile.module#ProfileModule'
    },
    {
        path        : 'main',
        loadChildren: './main/dashboards/dashboards.module#DashboardModule'
    },
    {
        path      : '**',
        redirectTo: 'main/dashboards/professional'
    }
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
         RouterModule.forRoot(appRoutes, {useHash: true}),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // album modules
        AlbumModule.forRoot(albumConfig),
        AlbumProgressBarModule,
        AlbumSharedModule,
        AlbumSidebarModule,
        AlbumThemeOptionsModule,
        // App modules
        LayoutModule,
        DashboardModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule {
}
