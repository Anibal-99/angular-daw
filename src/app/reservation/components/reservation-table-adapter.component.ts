import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reserva, emptyReserva } from '../reservation.model';
import { Observable, of } from 'rxjs';

/**
 * Adapter for reservations to use the base table
 * component in order to list reservations
 */
@Component({
    selector: 'app-reservation-table-adapter',
    template: `
        <app-base-table
            [dataSource]="reservas$ | async"
            [displayedColumns]="displayedColumns"
            [addDialog]="addDialog"
            [destroyDialog]="destroyDialog"
            (refresh)="emitRefresh($event)"
        ></app-base-table>`,
})
export class ReservationTableAdapterComponent {
    @Input() reservas$: Observable<Reserva[]> = of([]);
    @Input() addDialog: any;
    @Input() destroyDialog: any;
    @Output() refresh: EventEmitter<boolean> = new EventEmitter();

    emitRefresh(event: boolean) {
        this.refresh.emit(event);
    }

    displayedColumns: any[] = Object.keys(emptyReserva);
}
