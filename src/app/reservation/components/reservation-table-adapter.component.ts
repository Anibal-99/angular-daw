import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reservation, emptyReservation } from '../reservation.model';
import { Observable, of } from 'rxjs';

/**
 * Adapter for reservations to use the base table
 * component in order to list reservations
 */
@Component({
    selector: 'app-reservation-table-adapter',
    template: `
        <app-base-table
            [dataSource$]="reservas$"
            [displayedColumns]="displayedColumns"
            [mutateDialog]="mutateDialog"
            [destroyDialog]="destroyDialog"
        ></app-base-table>`,
})
export class ReservationTableAdapterComponent {
    @Input() reservas$: Observable<Reservation[]> = of([]);
    @Input() mutateDialog: any;
    @Input() destroyDialog: any;
    displayedColumns: string[] = Object.keys(emptyReservation);
}
