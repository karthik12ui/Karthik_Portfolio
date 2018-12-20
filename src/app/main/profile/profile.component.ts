import { Component, ViewEncapsulation } from '@angular/core';
import { albumAnimations } from '../../../@album/animations';


@Component({
    selector     : 'profile',
    templateUrl  : './profile.component.html',
    styleUrls    : ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : albumAnimations
})
export class ProfileComponent
{
    /**
     * Constructor
     */
    constructor() {

    }

    openDoc() {
        const url = '../../../../../assets/documents/karthik_N Angular@UX&UI.pdf';
        window.open(url, '_blank');
    }

}
