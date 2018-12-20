import { NgModule } from '@angular/core';
import { AlbumSidebarComponent } from './sidebar.component';


@NgModule({
    declarations: [
        AlbumSidebarComponent
    ],
    exports     : [
        AlbumSidebarComponent
    ]
})
export class AlbumSidebarModule
{
}
