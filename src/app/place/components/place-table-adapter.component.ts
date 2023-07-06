import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Place, emptyPlace } from '../place.model';

@Component({
  selector: 'app-place-table-adapter',
  template: `
      <app-base-table
          [dataSource$]="places$"
          [displayedColumns]="displayedColumns"
          [mutateDialog]="mutateDialog"
          [destroyDialog]="destroyDialog"
      ></app-base-table>`,
})
export class PlaceTableAdapterComponent  {
    @Input() places$: Observable<Place[]> = of([]);
    @Input() mutateDialog: any;
    @Input() destroyDialog: any;
    displayedColumns: string[] = Object.keys(emptyPlace);

}
