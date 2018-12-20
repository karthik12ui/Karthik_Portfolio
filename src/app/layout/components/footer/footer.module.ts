import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { FooterComponent } from './footer.component';
import { AlbumSharedModule } from '../../../../@album/shared.module';


@NgModule({
    declarations: [
        FooterComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatToolbarModule,

        AlbumSharedModule
    ],
    exports     : [
        FooterComponent
    ]
})
export class FooterModule
{
}
