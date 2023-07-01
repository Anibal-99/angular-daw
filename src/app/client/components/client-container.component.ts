import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client.model';
import { Observable, of } from 'rxjs';
import { ClienteApiService } from '../services/client-api.service';

@Component({
    selector: 'app-client',
    templateUrl: './client-container.component.html',
    providers: [ClienteApiService]
})

export class ClienteContainerComponent implements OnInit {
    constructor(private clienteApiService: ClienteApiService) {}
    clientes$: Observable<Client[]> = of([]);

    ngOnInit(): void {
        this.clientes$ = this.clienteApiService.getClientes();
    }

}
