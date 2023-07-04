import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PlaceDto, Place } from './place.model';
import { ApiService } from '../api.service';

@Injectable()
export class PlaceApiService {
    constructor(private apiService: ApiService){}

    adaptPlaces(places: PlaceDto[]): Place[] {
        return places.map(
            place => ({
                id: place.id,
                nombre: place.name,
            } as Place)
        )
    }

    getPlaces(): Observable<Place[]> {
        return this.apiService.getPlaces().pipe(map(this.adaptPlaces));
    };

    addPlace(place: PlaceDto[]): Observable<any>{
        return this.apiService.addPlace(place);
    };

    editPlace(id: number, place: PlaceDto[]){
        return this.apiService.editPlace(id, place);
    }

    destroyPlace(id: number){
        return this.apiService.destroyPlace(id);
    }

}
