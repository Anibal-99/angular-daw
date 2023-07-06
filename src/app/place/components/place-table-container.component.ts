import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Place } from '../place.model';
import { PlaceApiService } from '../place-api.service';
import { MutateDialogComponentPlace } from './mutate-place-dialog/mutate-place-dialog.component';
import { DestroyDialogComponentPlace } from './destroy-place-dialog/destroy-place-dialog.component';


@Component({
    selector: 'app-place',
    template: `
        <app-place-table-adapter
            [places$]="places$"
            [mutateDialog]="mutateDialog"
            [destroyDialog]="destroyDialog"
        ></app-place-table-adapter>`,
    providers: [PlaceApiService]
})

export class PlaceContainerComponent {
    constructor(private placeApiService: PlaceApiService) {}
    places$: Observable<Place[]> = this.placeApiService.getPlaces();
    mutateDialog = MutateDialogComponentPlace;
    destroyDialog = DestroyDialogComponentPlace;
}
