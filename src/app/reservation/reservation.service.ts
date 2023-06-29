import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RawReservation } from './reservation.model';
import { Reserva } from './reservation.model';
import { ApiService } from '../api.service';

/**
 * Injectable service for communicatig with reservation+
 * related methods on the base api service.
 */
@Injectable()
export class ReservationApiService {
    constructor(private apiService: ApiService){}

    adaptReservation(reservations: RawReservation[]): Reserva[] {
        return reservations.map(
            r => ({
                id: r.id,
                titulo: r.title,
                razon: r.reason,
                monto: r.ammount,
                fecha: r.time,
            } as Reserva)
        )
    }

    getReservations(): Observable<Reserva[]> {
        return this.apiService.getReservations().pipe(map(this.adaptReservation));
    };

    addReservation(reservation: RawReservation): Observable<any>{
        return this.apiService.addReservation(reservation);
    };
}
