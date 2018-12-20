import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule, MatRippleModule } from '@angular/material';

import { AlbumMaterialColorPickerComponent } from './material-color-picker.component';
import { AlbumPipesModule } from '../../pipes/pipes.module';

@NgModule({
    declarations: [
        AlbumMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatRippleModule,

        AlbumPipesModule
    ],
    exports: [
        AlbumMaterialColorPickerComponent
    ],
})
export class AlbumMaterialColorPickerModule
{
}
