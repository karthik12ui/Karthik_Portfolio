import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, 
    MatOptionModule, MatRadioModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';
import { AlbumThemeOptionsComponent } from './theme-options.component';
import { AlbumSidebarModule } from '../sidebar/sidebar.module';
import { AlbumMaterialColorPickerModule } from '../material-color-picker/material-color-picker.module';
import { AlbumDirectivesModule } from '../../directives/directives';


@NgModule({
    declarations: [
        AlbumThemeOptionsComponent
    ],
    imports     : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,

        AlbumDirectivesModule,
        AlbumMaterialColorPickerModule,
        AlbumSidebarModule
    ],
    exports     : [
        AlbumThemeOptionsComponent
    ]
})
export class AlbumThemeOptionsModule
{
}
