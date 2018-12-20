import { NgModule } from '@angular/core';
import { VerticalLayout1Module } from './vertical/layout-1/layout-1.module';
import { HorizontalLayout1Module } from './horizontal/layout-1/layout-1.module';
import { QuickPanelModule } from 'src/app/layout/components/quick-panel/quick-panel.module';

@NgModule({
    imports: [
        VerticalLayout1Module,

        QuickPanelModule,
        HorizontalLayout1Module
    ],
    exports: [
        VerticalLayout1Module,


        HorizontalLayout1Module
    ]
})
export class LayoutModule
{
}
