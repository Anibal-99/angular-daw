import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlaceApiService } from '../../place-api.service';

/**
 * Dialog for destroying new place
*/
@Component({
    selector: 'app-destroy-dialog-place',
    templateUrl: './destroy-place-dialog.component.html',
    styleUrls: ['./destroy-place-dialog.component.sass'],
    providers: [DatePipe, PlaceApiService]
})

export class DestroyDialogComponentPlace implements OnInit, OnDestroy {
    subscriptions: Subscription[] = [];
    SUCCESS_MESSAGE = "Espacio eliminado con éxito."
    FAILURE_MESSAGE = "Hubo un error al eliminar el espacio."
    DISSMISS_MESSAGE = "Ocultar"

    constructor(
        @Inject(MAT_DIALOG_DATA) public id: number,
        private placeApiService: PlaceApiService,
        private dialogRef: MatDialogRef<DestroyDialogComponentPlace>,
        private _snackBar: MatSnackBar,
    ) { }


    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    ngOnInit(): void { }

    destroyPlace() {
        this.subscriptions.push(
            this.placeApiService.destroyPlace(this.id).subscribe({
                next: (res) => {
                    this._snackBar.open(this.SUCCESS_MESSAGE, this.DISSMISS_MESSAGE);
                    this.dialogRef.close();
                },
                error: (res) => {
                    this._snackBar.open(this.FAILURE_MESSAGE, this.DISSMISS_MESSAGE);
                    this.dialogRef.close();
                }
            })
        )
    }
}
