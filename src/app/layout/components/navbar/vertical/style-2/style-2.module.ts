import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { NavbarVerticalStyle2Component } from './style-2.component';
import { AlbumSharedModule } from '../../../../../../@album/shared.module';
import { AlbumNavigationModule } from '../../../../../../@album/components';


@NgModule({
    declarations: [
        NavbarVerticalStyle2Component
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        AlbumSharedModule,
        AlbumNavigationModule
    ],
    exports     : [
        NavbarVerticalStyle2Component
    ]
})
export class NavbarVerticalStyle2Module
{
}
