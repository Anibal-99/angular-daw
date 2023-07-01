import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ReservationDto } from './reservation.model';
import { Reservation } from './reservation.model';
import { ApiService } from '../api.service';
import { Client } from '../client/models/client.model';
import { State } from '../state/models/state.model';

/**
 * Injectable service for communicatig with reservation+
 * related methods on the base api service.
 */
@Injectable()
export class ReservationApiService {
    constructor(private apiService: ApiService){}

    adaptReservation(reservations: ReservationDto[]): Reservation[] {
        return reservations.map(
            r => ({
                id: r.id,
                titulo: r.title,
                razon: r.reason,
                monto: r.ammount,
                fecha: r.date,
                cliente: {id: r.client?.id, nombre: r.client?.name} as Client,
                estado: {id: r.state?.id, nombre: r.state?.name} as State,
            } as Reservation)
        )
    }

    getReservations(): Observable<Reservation[]> {
        return this.apiService.getReservations().pipe(map(this.adaptReservation));
    };

    addReservation(reservation: ReservationDto): Observable<any>{
        return this.apiService.addReservation(reservation);
    };

    editReservation(id: number, reservation: ReservationDto): Observable<any> {
        return this.apiService.editReservation(id, reservation);
    }

    destroyReservation(id: number) {
        return this.apiService.destroyReservation(id);
    }
}
