import { Component, Input } from '@angular/core';
import { Resource, emptyResource } from '../resource.model';
import { Observable, of } from 'rxjs';
import { ResourceApiService } from '../resource-api.service';
import { MutateDialogComponentResource } from './mutate-resource-dialog/mutate-resource-dialog.component';
import { DestroyDialogComponentResource } from './destroy-resource-dialog/destroy-resource-dialog.component';

@Component({
  selector: 'app-resource',
  template: `
        <app-resource-table-adapter 
            [resources$]="resources$"
            [mutateDialog]="mutateDialog"
            [destroyDialog]="destroyDialog"
            (refresh)="getData()"
        ></app-resource-table-adapter>`,
    providers: [ResourceApiService]
})
export class ResourceContainerComponent  {
    resources$: Observable<Resource[]> = of([]);
    constructor(private resourceApiService: ResourceApiService) {}
    mutateDialog = MutateDialogComponentResource;
    destroyDialog = DestroyDialogComponentResource;

    ngOnInit(): void {
        this.getData();
    }

    getData(): void {
        this.resources$ = this.resourceApiService.getResources();
    }
}
