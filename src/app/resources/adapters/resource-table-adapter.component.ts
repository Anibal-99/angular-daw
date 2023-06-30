import { Component, Input } from '@angular/core';
import { Resource, emptyResource } from '../models/resource.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-resource-table-adapter',
  template: `<app-base-table [dataSource]="resources$ | async" [displayedColumns]="displayedColumns"></app-base-table>`,
})
export class ResourceTableAdapterComponent  {
    @Input() resources$: Observable<Resource[]> = of([]);

    displayedColumns: string[] = Object.keys(emptyResource);

    constructor(){}

}
