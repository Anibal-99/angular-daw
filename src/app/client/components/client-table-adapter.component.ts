import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Client, emptyCliente } from '../client.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-client-table-adapter',
  template: `
      <app-base-table
          [dataSource$]="clientes$"
          [displayedColumns]="displayedColumns"
          [mutateDialog]="mutateDialog"
          [destroyDialog]="destroyDialog"
      ></app-base-table>`,
})
export class ClienteTableAdapterComponent  {
    @Input() clientes$: Observable<Client[]> = of([]);
    @Input() mutateDialog: any;
    @Input() destroyDialog: any;
    displayedColumns: string[] = Object.keys(emptyCliente);
}
