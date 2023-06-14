import { Component, Input } from '@angular/core';
import { Reserva, emptyReserva } from '../models/reservation.model';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-reservation-table-adapter',
  template: `<app-base-table [dataSource]="reservas$ | async" [displayedColumns]="displayedColumns"></app-base-table>`,
})
export class ReservationTableAdapterComponent  {
    @Input() reservas$: Observable<Reserva[]> = of([]);

    displayedColumns: string[] = Object.keys(emptyReserva);

    constructor(){}

}
