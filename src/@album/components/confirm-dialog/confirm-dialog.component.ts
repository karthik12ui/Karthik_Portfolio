import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector   : 'album-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class AlbumConfirmDialogComponent {
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<AlbumConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<AlbumConfirmDialogComponent>
    ) {
    }

}
