import { Component, Input } from '@angular/core';
import { Client, emptyCliente } from '../models/client.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-client-table-adapter',
  template: `<app-base-table [dataSource]="clientes$ | async" [displayedColumns]="displayedColumns"></app-base-table>`,
})
export class ClienteTableAdapterComponent  {
    @Input() clientes$: Observable<Client[]> = of([]);

    displayedColumns: string[] = Object.keys(emptyCliente);

    constructor(){}

}
