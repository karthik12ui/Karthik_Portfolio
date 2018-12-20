import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule, MatListModule } from '@angular/material';
import { AlbumDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';
import { AlbumDemoContentComponent } from './demo-content/demo-content.component';


@NgModule({
    declarations: [
        AlbumDemoContentComponent,
        AlbumDemoSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports     : [
        AlbumDemoContentComponent,
        AlbumDemoSidebarComponent
    ]
})
export class AlbumDemoModule
{
}
