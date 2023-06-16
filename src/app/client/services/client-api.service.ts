import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RawCliente, Cliente } from '../models/client.model';
import { ApiService } from '../../api.service';

@Injectable()
export class ClienteApiService {
    constructor(private apiService: ApiService){}

    adaptClientes(clientes: RawCliente[]): Cliente[] {
        return clientes.map(
            cliente => ({
                id: cliente.id,
                nombre: cliente.name,
                apellido: cliente.surname,
                dni: cliente.dni,
            } as Cliente)
        )
    }

    getClientes(): Observable<Cliente[]> {
        return this.apiService.getClientes().pipe(map(this.adaptClientes));
    };
}