import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { Observable, of } from 'rxjs';
import { ClienteApiService } from '../client-api.service';
import { MutateDialogComponentClient } from './mutate-client-dialog/mutate-client-dialog.component';
import { DestroyDialogComponentClient } from './destroy-client-dialog/destroy-client-dialog.component';

@Component({
    selector: 'app-client',
    template: `
        <app-client-table-adapter
            [clientes$]="clientes$"
            [mutateDialog]="mutateDialog"
            [destroyDialog]="destroyDialog"
            (refresh)="getData()"
        ></app-client-table-adapter>`,
    providers: [ClienteApiService]
})

export class ClienteContainerComponent implements OnInit {
    constructor(private clientApiService: ClienteApiService) {}
    clientes$: Observable<Client[]> = of([]);
    mutateDialog = MutateDialogComponentClient;
    destroyDialog = DestroyDialogComponentClient;

    ngOnInit(): void {
        this.getData();
    }

    getData(): void {
        this.clientes$ = this.clientApiService.getClientes();
    }
}
