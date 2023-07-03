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
            (refresh)="getData()"
        ></app-place-table-adapter>`,
    providers: [PlaceApiService]
})

export class PlaceContainerComponent implements OnInit {
    constructor(private placeApiService: PlaceApiService) {}
    places$: Observable<Place[]> = of([]);
    mutateDialog = MutateDialogComponentPlace;
    destroyDialog = DestroyDialogComponentPlace;

    ngOnInit(): void {
        this.getData();
    }

    getData(): void {
        this.places$ = this.placeApiService.getPlaces();
    }
}
