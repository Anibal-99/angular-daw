import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../models/reservation.model';
import { Observable, of } from 'rxjs';
import { ReservationApiService } from '../../services/reservation-api.service';


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
