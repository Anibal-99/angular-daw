import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RawReservation, Reserva} from './reservation/models/reservation.model';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
    private apiBaseUrl = "http://localhost:8080/api"

    constructor(private http: HttpClient) { }


    getReservations() {
        return this.http.get<RawReservation[]>(`${this.apiBaseUrl}/reservations/`)
    }

    addReservation(reserva: RawReservation){
        return this.http.post<RawReservation>(`${this.apiBaseUrl}/reservations/`, reserva)
    }
}
