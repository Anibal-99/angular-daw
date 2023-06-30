import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReservationApiService } from '../../reservation.service';
import { DatePipe } from '@angular/common';
import { StateApiService } from 'src/app/state/services/state-api.service';
import { Subscription } from 'rxjs';
import { ClienteApiService } from 'src/app/client/services/client-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Dialog for destroying new reservations
*/
@Component({
    selector: 'app-destroy-dialog-reservation',
    templateUrl: './destroy-reservation-dialog.component.html',
    styleUrls: ['./destroy-reservation-dialog.component.sass'],
    providers: [ReservationApiService, DatePipe, StateApiService, ClienteApiService]
})

export class DestroyDialogComponentReservation implements OnInit, OnDestroy {
    subscriptions: Subscription[] = [];
    SUCCESS_MESSAGE = "Reserva eliminada con éxito."
    FAILURE_MESSAGE = "Hubo un error al eliminar la reserva."
    DISSMISS_MESSAGE = "Ocultar"

    constructor(
        @Inject(MAT_DIALOG_DATA) public id: number,
        private reservationApiService: ReservationApiService,
        private dialogRef: MatDialogRef<DestroyDialogComponentReservation>,
        private _snackBar: MatSnackBar,
    ) { }


    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }


    ngOnInit(): void { }

    destroyReservation() {
        this.subscriptions.push(
            this.reservationApiService.destroyReservation(this.id).subscribe({
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
