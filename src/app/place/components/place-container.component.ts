import { Component, OnInit } from '@angular/core';
import { Place } from '../models/place.model';
import { Observable, of } from 'rxjs';
import { PlaceApiService } from '../service/place-api.service';

@Component({
    selector: 'app-place',
    templateUrl: './place-container.component.html',
    providers: [PlaceApiService]
})

export class PlaceContainerComponent implements OnInit {
    constructor(private placeApiService: PlaceApiService) {}
    places$: Observable<Place[]> = of([]);

    ngOnInit(): void {
        this.places$ = this.placeApiService.getPlaces();
    }
}
