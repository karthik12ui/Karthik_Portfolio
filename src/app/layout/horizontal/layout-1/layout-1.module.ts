import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { HorizontalLayout1Component } from './layout-1.component';
import { AlbumSharedModule } from '../../../../@album/shared.module';
import { AlbumSidebarModule, AlbumThemeOptionsModule } from '../../../../@album/components';
import { ContentModule } from '../../components/content/content.module';
import { FooterModule } from '../../components/footer/footer.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { QuickPanelModule } from '../../components/quick-panel/quick-panel.module';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';


@NgModule({
    declarations: [
        HorizontalLayout1Component
    ],
    imports     : [
        MatSidenavModule,

        AlbumSharedModule,
        AlbumSidebarModule,
        AlbumThemeOptionsModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        HorizontalLayout1Component
    ]
})
export class HorizontalLayout1Module
{
}
