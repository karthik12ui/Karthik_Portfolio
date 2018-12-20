import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { ToolbarComponent } from './toolbar.component';
import { AlbumSharedModule } from '../../../../@album/shared.module';
import { AlbumSearchBarModule, AlbumShortcutsModule } from '../../../../@album/components';


@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        AlbumSharedModule,
        AlbumSearchBarModule,
        AlbumShortcutsModule
    ],
    exports     : [
        ToolbarComponent
    ]
})
export class ToolbarModule
{
}
