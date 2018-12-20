import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlbumSharedModule } from '../../../../@album/shared.module';
import { ContentComponent } from './content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        AlbumSharedModule,
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule
{
}
