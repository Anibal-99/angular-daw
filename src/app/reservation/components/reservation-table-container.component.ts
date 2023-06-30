import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reservation.model';
import { Observable, of } from 'rxjs';
import { ReservationApiService } from '../reservation.service';
import { AddDialogComponentReservation } from './add-reservation-dialog/add-reservation-dialog.component';
import { DestroyDialogComponentReservation } from './destroy-reservation-dialog/destroy-reservation-dialog.component';


/**
 * Container for the table list of reservations
 */
@Component({
    selector: 'app-reservation',
    template: `
        <app-reservation-table-adapter
            [reservas$]="reservas$"
            [addDialog]="addDialog"
            [destroyDialog]="destroyDialog"
            (refresh)="getData()"
        ></app-reservation-table-adapter>`,
    providers: [ReservationApiService]
})

export class ReservationContainerComponent implements OnInit {
    constructor(private reservationApiService: ReservationApiService) {}
    reservas$: Observable<Reserva[]> = of([]);
    addDialog = AddDialogComponentReservation;
    destroyDialog = DestroyDialogComponentReservation;

    ngOnInit(): void {
        this.getData();
    }

    getData(): void {
        this.reservas$ = this.reservationApiService.getReservations();
    }
}
