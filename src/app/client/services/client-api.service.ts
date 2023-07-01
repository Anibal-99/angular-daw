import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ClientDto, Client } from '../models/client.model';
import { ApiService } from '../../api.service';

@Injectable()
export class ClienteApiService {
    constructor(private apiService: ApiService){}

    adaptClientes(clientes: ClientDto[]): Client[] {
        return clientes.map(
            cliente => ({
                id: cliente.id,
                nombre: cliente.name,
                apellido: cliente.surname,
                dni: cliente.dni,
            } as Client)
        )
    }

    getClientes(): Observable<Client[]> {
        return this.apiService.getClientes().pipe(map(this.adaptClientes));
    };
}
