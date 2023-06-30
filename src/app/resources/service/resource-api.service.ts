import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RawResource, Resource } from '../models/resource.model';
import { ApiService } from '../../api.service';

@Injectable()
export class ResourceApiService {
    constructor(private apiService: ApiService){}

    adaptResources(resources: RawResource[]): Resource[] {
        return resources.map(
            resource => ({
                id: resource.id,
                nombre: resource.name,
                descripcion: resource.description,
                lugar: resource.places,
            } as Resource)
        )
    }

    getResources(): Observable<Resource[]> {
        return this.apiService.getResources().pipe(map(this.adaptResources));
    };
}
