import { Component, HostBinding, Input } from '@angular/core';

import { AlbumNavigationItem } from '../../../../types';

@Component({
    selector   : 'album-nav-vertical-item',
    templateUrl: './item.component.html',
    styleUrls  : ['./item.component.scss']
})
export class AlbumNavVerticalItemComponent
{
    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item: AlbumNavigationItem;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
