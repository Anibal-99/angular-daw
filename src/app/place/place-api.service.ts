import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PlaceDto, Place } from './place.model';
import { ApiService } from '../api.service';
import { Resource } from '../resources/resource.model'

@Injectable()
export class PlaceApiService {
    constructor(private apiService: ApiService){}

    adaptPlaces(places: PlaceDto[]): Place[] {
        return places.map(
            place => ({
                id: place.id,
                nombre: place.name,
                recursos: place.resources.map(r => (
                    {
                        id: r.id,
                        nombre: r.name,
                        descripcion: r.description
                    }) as Resource
                ),
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
