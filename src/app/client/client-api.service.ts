import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ClientDto, Client } from './client.model';
import { ApiService } from '../api.service';

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
    addClient(client: ClientDto): Observable<any>{
        return this.apiService.addClient(client);
    };
    editClient(id: number, client: ClientDto){
        return this.apiService.editClient(id, client);
    }
    destroyClient(id: number){
        console.log(id)
        return this.apiService.destroyClient(id);
    }

}
