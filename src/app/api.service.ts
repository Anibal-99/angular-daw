import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RawReservation } from './reservation/reservation.model';
import { RawCliente } from './client/models/client.model';
import { RawPlace } from './place/models/place.model';
import { RawResource } from './resources/models/resource.model';
import { RawState } from './state/models/state.model';

@Injectable()
export class ApiService {
  private apiBaseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getReservations() {
    return this.http.get<RawReservation[]>(`${this.apiBaseUrl}/reservations/`);
  }

  getClientes() {
    return this.http.get<RawCliente[]>(`${this.apiBaseUrl}/clients/`);
  }

  getPlaces() {
    return this.http.get<RawPlace[]>(`${this.apiBaseUrl}/places/`);
  }

  getResources() {
    return this.http.get<RawResource[]>(`${this.apiBaseUrl}/resources/`);
  }

  addReservation(reserva: RawReservation){
    return this.http.post<RawReservation>(`${this.apiBaseUrl}/reservations/`, reserva)
  }

  getStates() {
    return this.http.get<RawState[]>(`${this.apiBaseUrl}/states/`);
  }

}
