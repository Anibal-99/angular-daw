import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RawReservation} from './reservation/models/reservation.model';

@Injectable()
export class ApiService {
    private apiBaseUrl = "http://localhost:8080/api"

    constructor(private http: HttpClient) { }


    getReservations() {
        return this.http.get<RawReservation[]>(`${this.apiBaseUrl}/reservations/`)
    }
}