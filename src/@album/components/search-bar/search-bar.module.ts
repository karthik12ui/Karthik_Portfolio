import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';
import { AlbumSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        AlbumSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        AlbumSearchBarComponent
    ]
})
export class AlbumSearchBarModule
{
}
