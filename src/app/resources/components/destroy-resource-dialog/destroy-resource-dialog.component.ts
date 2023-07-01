import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResourceApiService } from '../../resource-api.service';

/**
 * Dialog for destroying new client
*/
@Component({
    selector: 'app-destroy-dialog-resource',
    templateUrl: './destroy-resource-dialog.component.html',
    styleUrls: ['./destroy-resource-dialog.component.sass'],
    providers: [DatePipe, ResourceApiService]
})

export class DestroyDialogComponentResource implements OnInit, OnDestroy {
    subscriptions: Subscription[] = [];
    SUCCESS_MESSAGE = "Recurso eliminada con éxito."
    FAILURE_MESSAGE = "Hubo un error al eliminar el recurso."
    DISSMISS_MESSAGE = "Ocultar"

    constructor(
        @Inject(MAT_DIALOG_DATA) public id: number,
        private resourceApiService: ResourceApiService,
        private dialogRef: MatDialogRef<DestroyDialogComponentResource>,
        private _snackBar: MatSnackBar,
    ) { }


    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    ngOnInit(): void { }

    destroyResources() {
        this.subscriptions.push(
            this.resourceApiService.destroyResources(this.id).subscribe({
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
