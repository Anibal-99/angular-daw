import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReservationDto } from './reservation/reservation.model';
import { ClientDto } from './client/client.model';
import { PlaceDto } from './place/place.model';
import { ResourceDto } from './resources/resource.model';
import { StateDto } from './state/models/state.model';

@Injectable()
export class ApiService {
  private apiBaseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  // reservations
  getReservations() {
    return this.http.get<ReservationDto[]>(`${this.apiBaseUrl}/reservations/`);
  }

  addReservation(reserva: ReservationDto){
    return this.http.post<ReservationDto>(`${this.apiBaseUrl}/reservations/`, reserva)
  }

  editReservation(id: number, reserva: ReservationDto){
    return this.http.put<ReservationDto>(`${this.apiBaseUrl}/reservations/${id}`, reserva)
  }


  destroyReservation(id: number) {
    return this.http.delete(`${this.apiBaseUrl}/reservations/${id}`)
  }

  // clients
  getClientes() {
    return this.http.get<ClientDto[]>(`${this.apiBaseUrl}/clients/`);
  }

  addClient(client: ClientDto){
    return this.http.post<ClientDto>(`${this.apiBaseUrl}/clients/`, client)
  }

  editClient(id: number, client: ClientDto){
    return this.http.put<ClientDto>(`${this.apiBaseUrl}/clients/${id}`, client)
  }

  destroyClient(id: number){
    return this.http.delete(`${this.apiBaseUrl}/clients/${id}`)
  }

  // places
  getPlaces() {
    return this.http.get<PlaceDto[]>(`${this.apiBaseUrl}/places/`);
  }

  addPlace(place: PlaceDto[]){
    return this.http.post<PlaceDto>(`${this.apiBaseUrl}/places/`, place)
  }

  editPlace(id: number, place: PlaceDto[]){
    return this.http.put<PlaceDto>(`${this.apiBaseUrl}/places/${id}`, place)
  }

  destroyPlace(id: number){
    return this.http.delete(`${this.apiBaseUrl}/places/${id}`)
  }

  // states
  getStates() {
    return this.http.get<StateDto[]>(`${this.apiBaseUrl}/states/`);
  }
  
  // Resources
  getResources() {
    return this.http.get<ResourceDto[]>(`${this.apiBaseUrl}/resources/`);
  }
  
  addResoruces(resource: ResourceDto){
    return this.http.post<ResourceDto>(`${this.apiBaseUrl}/resources/`, resource)
  }

  editResources(id: number, resource: ResourceDto){
    return this.http.put<ResourceDto>(`${this.apiBaseUrl}/resources/${id}`, resource)
  }

  destroyResources(id: number){
    return this.http.delete(`${this.apiBaseUrl}/resources/${id}`)
  }

}
