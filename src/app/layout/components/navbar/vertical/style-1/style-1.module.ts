import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { NavbarVerticalStyle1Component } from './style-1.component';
import { AlbumSharedModule } from '../../../../../../@album/shared.module';
import { AlbumNavigationModule } from '../../../../../../@album/components';

@NgModule({
    declarations: [
        NavbarVerticalStyle1Component
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        AlbumSharedModule,
        AlbumNavigationModule
    ],
    exports     : [
        NavbarVerticalStyle1Component
    ]
})
export class NavbarVerticalStyle1Module
{
}
