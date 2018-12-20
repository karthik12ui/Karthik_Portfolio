import { Component, HostBinding, Input } from '@angular/core';
import { AlbumNavigationItem } from '../../../../types';


@Component({
    selector   : 'album-nav-vertical-group',
    templateUrl: './group.component.html',
    styleUrls  : ['./group.component.scss']
})
export class AlbumNavVerticalGroupComponent
{
    @HostBinding('class')
    classes = 'nav-group nav-item';

    @Input()
    item: AlbumNavigationItem;

    /**
     * Constructor
     */
    constructor()
    {
    }

}
