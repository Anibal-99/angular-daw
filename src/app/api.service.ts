import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReservationDto } from './reservation/reservation.model';
import { ClientDto } from './client/models/client.model';
import { PlaceDto } from './place/models/place.model';
import { ResourceDto } from './resources/models/resource.model';
import { StateDto } from './state/models/state.model';

@Injectable()
export class ApiService {
  private apiBaseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getReservations() {
    return this.http.get<ReservationDto[]>(`${this.apiBaseUrl}/reservations/`);
  }

  getClientes() {
    return this.http.get<ClientDto[]>(`${this.apiBaseUrl}/clients/`);
  }

  getPlaces() {
    return this.http.get<PlaceDto[]>(`${this.apiBaseUrl}/places/`);
  }

  getResources() {
    return this.http.get<ResourceDto[]>(`${this.apiBaseUrl}/resources/`);
  }

  addReservation(reserva: ReservationDto){
    return this.http.post<ReservationDto>(`${this.apiBaseUrl}/reservations/`, reserva)
  }

  editReservation(id: number, reserva: ReservationDto){
    return this.http.put<ReservationDto>(`${this.apiBaseUrl}/reservations/${id}`, reserva)
  }

  getStates() {
    return this.http.get<StateDto[]>(`${this.apiBaseUrl}/states/`);
  }

  destroyReservation(id: number) {
    return this.http.delete(`${this.apiBaseUrl}/reservations/${id}`)
  }

}
