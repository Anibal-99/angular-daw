import { Component, Input } from '@angular/core';
import { Place, emptyPlace } from '../models/place.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-place-table-adapter',
  template: `<app-base-table [dataSource]="places$ | async" [displayedColumns]="displayedColumns"></app-base-table>`,
})
export class PlaceTableAdapterComponent  {
    @Input() places$: Observable<Place[]> = of([]);

    displayedColumns: string[] = Object.keys(emptyPlace);

    constructor(){}

}
