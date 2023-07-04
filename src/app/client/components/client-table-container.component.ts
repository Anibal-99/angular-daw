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
        ></app-client-table-adapter>`,
    providers: [ClienteApiService]
})

export class ClienteContainerComponent {
    constructor(private clientApiService: ClienteApiService) {}
    clientes$: Observable<Client[]> = this.clientApiService.getClientes();
    mutateDialog = MutateDialogComponentClient;
    destroyDialog = DestroyDialogComponentClient;
}
