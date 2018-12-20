import { NgModule } from '@angular/core';
import { AlbumWidgetComponent } from './widget.component';
import { AlbumWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        AlbumWidgetComponent,
        AlbumWidgetToggleDirective
    ],
    exports     : [
        AlbumWidgetComponent,
        AlbumWidgetToggleDirective
    ],
})
export class AlbumWidgetModule
{
}
