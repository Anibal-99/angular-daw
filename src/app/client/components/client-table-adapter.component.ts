import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Client, emptyCliente } from '../client.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-client-table-adapter',
  template: `
      <app-base-table 
          [dataSource]="clientes$ | async" 
          [displayedColumns]="displayedColumns"
          [mutateDialog]="mutateDialog"
          [destroyDialog]="destroyDialog"
          (refresh)="emitRefresh($event)"
      ></app-base-table>`,
})
export class ClienteTableAdapterComponent  {
    @Input() clientes$: Observable<Client[]> = of([]);
    @Input() mutateDialog: any;
    @Input() destroyDialog: any;
    @Output() refresh: EventEmitter<boolean> = new EventEmitter();

    emitRefresh(event: boolean) {
        this.refresh.emit(event);
    }

    displayedColumns: string[] = Object.keys(emptyCliente);
    constructor(){}

}
