import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Place, emptyPlace } from '../place.model';

@Component({
  selector: 'app-place-table-adapter',
  template: `
      <app-base-table 
          [dataSource]="places$ | async" 
          [displayedColumns]="displayedColumns"
          [mutateDialog]="mutateDialog"
          [destroyDialog]="destroyDialog"
          (refresh)="emitRefresh($event)"
      ></app-base-table>`,
})
export class PlaceTableAdapterComponent  {
    @Input() places$: Observable<Place[]> = of([]);
    @Input() mutateDialog: any;
    @Input() destroyDialog: any;
    @Output() refresh: EventEmitter<boolean> = new EventEmitter();

    emitRefresh(event: boolean) {
        this.refresh.emit(event);
    }

    displayedColumns: string[] = Object.keys(emptyPlace);
    constructor(){}

}
