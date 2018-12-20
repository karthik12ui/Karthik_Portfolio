import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { AlbumConfirmDialogComponent } from './confirm-dialog.component';


@NgModule({
    declarations: [
        AlbumConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        AlbumConfirmDialogComponent
    ],
})
export class AlbumConfirmDialogModule {
}
