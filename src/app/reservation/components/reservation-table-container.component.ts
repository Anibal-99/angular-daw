import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reservation.model';
import { Observable, of } from 'rxjs';
import { ReservationApiService } from '../reservation.service';


/**
 * Container for the table list of reservations
 */
@Component({
    selector: 'app-reservation',
    template: `
        <app-reservation-table-adapter
            [reservas$]="reservas$"
        ></app-reservation-table-adapter>`,
    providers: [ReservationApiService]
})

export class ReservationContainerComponent implements OnInit {
    constructor(private reservationApiService: ReservationApiService) {}
    reservas$: Observable<Reserva[]> = of([]);

    ngOnInit(): void {
        this.reservas$ = this.reservationApiService.getReservations();
    }
}
