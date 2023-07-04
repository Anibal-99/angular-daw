import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { ClienteApiService } from 'src/app/client/client-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Dialog for destroying new client
*/
@Component({
    selector: 'app-destroy-dialog-client',
    templateUrl: './destroy-client-dialog.component.html',
    styleUrls: ['./destroy-client-dialog.component.sass'],
    providers: [DatePipe, ClienteApiService]
})

export class DestroyDialogComponentClient implements OnInit, OnDestroy {
    subscriptions: Subscription[] = [];
    SUCCESS_MESSAGE = "Cliente eliminada con éxito."
    FAILURE_MESSAGE = "Hubo un error al eliminar cliente."
    DISSMISS_MESSAGE = "Ocultar"

    constructor(
        @Inject(MAT_DIALOG_DATA) public id: number,
        private clientApiService: ClienteApiService,
        private dialogRef: MatDialogRef<DestroyDialogComponentClient>,
        private _snackBar: MatSnackBar,
    ) { }


    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    ngOnInit(): void { }

    destroyClient() {
        this.subscriptions.push(
            this.clientApiService.destroyClient(this.id).subscribe({
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
