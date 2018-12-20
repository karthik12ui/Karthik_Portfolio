import { NgModule } from '@angular/core';
import { AlbumIfOnDomDirective } from './album-if-on-dom/album-if-on-dom.directive';
import { AlbumInnerScrollDirective } from './album-inner-scroll/album-inner-scroll.directive';
import { AlbumMatSidenavHelperDirective, AlbumMatSidenavTogglerDirective } from './album-mat-sidenav/album-mat-sidenav.directive';
import { AlbumPerfectScrollbarDirective } from './album-perfect-scrollbar/album-perfect-scrollbar.directive';


@NgModule({
    declarations: [
        AlbumIfOnDomDirective,
        AlbumInnerScrollDirective,
        AlbumMatSidenavHelperDirective,
        AlbumMatSidenavTogglerDirective,
        AlbumPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        AlbumIfOnDomDirective,
        AlbumInnerScrollDirective,
        AlbumMatSidenavHelperDirective,
        AlbumMatSidenavTogglerDirective,
        AlbumPerfectScrollbarDirective
    ]
})
export class AlbumDirectivesModule
{
}
