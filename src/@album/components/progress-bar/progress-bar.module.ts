import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule, MatProgressBarModule } from '@angular/material';
import { AlbumProgressBarComponent } from './progress-bar.component';


@NgModule({
    declarations: [
        AlbumProgressBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatProgressBarModule
    ],
    exports     : [
        AlbumProgressBarComponent
    ]
})
export class AlbumProgressBarModule
{
}
