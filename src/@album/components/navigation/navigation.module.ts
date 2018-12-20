import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';
import { AlbumNavigationComponent } from './navigation.component';
import { AlbumNavVerticalGroupComponent } from './vertical/group/group.component';
import { AlbumNavVerticalItemComponent } from './vertical/item/item.component';
import { AlbumNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { AlbumNavHorizontalItemComponent } from './horizontal/item/item.component';
import { AlbumNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';


@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        AlbumNavigationComponent
    ],
    declarations: [
        AlbumNavigationComponent,
        AlbumNavVerticalGroupComponent,
        AlbumNavVerticalItemComponent,
        AlbumNavVerticalCollapsableComponent,
        AlbumNavHorizontalItemComponent,
        AlbumNavHorizontalCollapsableComponent
    ]
})
export class AlbumNavigationModule
{
}
