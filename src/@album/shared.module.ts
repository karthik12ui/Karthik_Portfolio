import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AlbumPipesModule } from './pipes/pipes.module';
import { AlbumDirectivesModule } from './directives/directives';

@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        AlbumDirectivesModule,
        AlbumPipesModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        AlbumDirectivesModule,
        AlbumPipesModule
    ]
})
export class AlbumSharedModule
{
}
