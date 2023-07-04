import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation.model';
import { Observable, of } from 'rxjs';
import { ReservationApiService } from '../reservation.service';
import { DestroyDialogComponentReservation } from './destroy-reservation-dialog/destroy-reservation-dialog.component';
import { MutateDialogComponentReservation } from './mutate-reservation-dialog/mutate-reservation-dialog.component';


/**
 * Container for the table list of reservations
 */
@Component({
    selector: 'app-reservation',
    template: `
        <app-reservation-table-adapter
            [reservas$]="reservas$"
            [mutateDialog]="mutateDialog"
            [destroyDialog]="destroyDialog"
        ></app-reservation-table-adapter>`,
    providers: [ReservationApiService]
})

export class ReservationContainerComponent  {
    constructor(private reservationApiService: ReservationApiService) {}
    reservas$ = this.reservationApiService.getReservations();
    mutateDialog = MutateDialogComponentReservation;
    destroyDialog = DestroyDialogComponentReservation;
}
