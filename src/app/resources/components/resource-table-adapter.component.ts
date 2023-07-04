import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resource, emptyResource } from '../resource.model';
import { ResourceApiService } from '../resource-api.service';

@Component({
  selector: 'app-resource-table-adapter',
  template: `
      <app-base-table 
          [dataSource]="resources$ | async" 
          [displayedColumns]="displayedColumns"
          [mutateDialog]="mutateDialog"
          [destroyDialog]="destroyDialog"
          (refresh)="emitRefresh($event)"
      ></app-base-table>`,
})
export class ResourceTableAdapterComponent  {
    @Input() resources$: Observable<Resource[]> = of([]);
    @Input() mutateDialog: any;
    @Input() destroyDialog: any;
    @Output() refresh: EventEmitter<boolean> = new EventEmitter();

    emitRefresh(event: boolean) {
        this.refresh.emit(event);
    }

    displayedColumns: string[] = Object.keys(emptyResource);
    constructor(){}
}
